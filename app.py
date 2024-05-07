import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env
import json

app = Flask(__name__)



app.secret_key = '1234'  # Use a strong secret key
app.config["MONGO_DBNAME"] = "car_maintenance"
app.config["MONGO_URI"] = "mongodb://localhost:27017/car_maintenance"

mongo = PyMongo(app)


with open('config.json', 'r') as config_file:
    config = json.load(config_file)
admin_username = config['admin_username']


@app.route("/")
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        user = mongo.db.directory.find_one(
            {"username": request.form.get("username").lower()})
        if user:
            if check_password_hash(
                user["password"], request.form.get
                    ("password")):
                session["user"] = request.form.get("username").lower()
                flash("Welcome, {}".format(request.form.get("username")))
                return redirect(url_for(
                    "userprofile", username=session["user"]))
            else:
                flash("Incorrect Username and/or Password")
                return redirect(url_for("login"))
        else:
            # username doesn't exist
            flash("Incorrect Username and/or Password")
            return redirect(url_for("login"))
    return render_template("login.html")


@app.route("/tracker")
def tracker():
    if 'user' not in session:
        flash("Login to site required")
        return redirect(url_for("login"))

    if session["user"] == admin_username:
        # Admin can view all cars and all logs
        user_cars = list(mongo.db.cars.find())
        logs = list(mongo.db.maintenance.find().sort("service_date", -1))
    else:
        # Regular users see only their cars and their logs
        user_cars = list(mongo.db.cars.find({"user": session["user"]}))
        logs = list(mongo.db.maintenance.find({"username": session["user"]}).sort("service_date", -1))
    
    return render_template("tracker.html", logs=logs, user_cars=user_cars)



@app.route("/detailed_record<record_id>")
def detailed_record(record_id):
    if session:
        record = mongo.db.maintenance.find_one({"_id": ObjectId(record_id)})
        return render_template("detailed_record.html", record=record)
    flash("Login to site required")
    return redirect(url_for("login"))


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        if mongo.db.directory.find_one({"username": request.form.get("username").lower()}):
            flash("Username already taken")
            return redirect(url_for("register"))
        register = {
            "name": request.form.get("name"),
            "email": request.form.get("email"),
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.directory.insert_one(register)
        session["user"] = request.form.get("username").lower()
        flash("Registration Successful!")
        return redirect(url_for("tracker"))
    return render_template("register.html")


@app.route("/userprofile/<username>", methods=["GET", "POST"])
def userprofile(username):
    if session:
        active_user = mongo.db.directory.find_one(
            {"username": session["user"]})
        username = active_user["username"]
        name = active_user["name"]
        email = active_user["email"]

        if session["user"]:
            return render_template(
                "userprofile.html", username=username, name=name, email=email)

        return redirect(url_for("login"))
    flash("Login to site required")
    return redirect(url_for("login"))


# add a new maintenance record to the DB.
@app.route('/add_record', methods=['GET', 'POST'])
def add_record():
    if 'user' not in session:
        flash("Login to site required")
        return redirect(url_for("login"))
    
    if session.get('user') != admin_username:
        flash("Administrator access required")
        return redirect(url_for("tracker"))

    if request.method == "POST":
        car_details = mongo.db.cars.find_one({"reg_no": request.form.get("reg_no")})
        if not car_details:
            flash("No car found with that registration number.")
            return redirect(url_for('add_record'))

        # Retrieve the username from the car details
        car_owner_username = car_details['user']

        make = car_details.get("make", "Unknown Make")
        model = car_details.get("model", "Unknown Model")
        garage_name = request.form.get("garage_name")
        garage_details = {
            "Speedy Repairs": {"contact": "John Doe", "phone": "555-0101"},
            "Fix-It-Quick": {"contact": "Jane Smith", "phone": "555-0202"},
            "Trusty Auto Service": {"contact": "Mike Brown", "phone": "555-0404"}
        }
        garage_info = garage_details.get(garage_name, {"contact": "Unknown", "phone": "No Contact"})
        paid = "yes" if request.form.get("service_paid") else "no"

        details = {
            "reg_no": request.form.get("reg_no"),
            "username": car_owner_username,  # Use the car owner's username
            "service_date": request.form.get("service_date"),
            "service_cost": request.form.get("service_cost"),
            "service_desc": request.form.get("service_desc"),
            "service_paid": paid,
            "odometer_reading": request.form.get("odometer_reading"),
            "car_make": make,
            "car_model": model,
            "garage_name": garage_name,
            "garage_contact": garage_info["contact"],
            "garage_phone": garage_info["phone"],
            "service_items": request.form.getlist("service_items")
        }

        mongo.db.maintenance.insert_one(details)
        flash("Maintenance record added for " + car_owner_username)
        return redirect(url_for("tracker"))

    cars = list(mongo.db.cars.find())
    garages = [
        {"garage_name": "Speedy Repairs", "garage_contact_name": "John Doe", "garage_contact_phone": "555-0101"},
        {"garage_name": "Fix-It-Quick", "garage_contact_name": "Jane Smith", "garage_contact_phone": "555-0202"},
        {"garage_name": "Trusty Auto Service", "garage_contact_name": "Mike Brown", "garage_contact_phone": "555-0404"}
    ]
    return render_template("add_record.html", cars=cars, garages=garages)

# edit a maintenance record.
@app.route("/edit_record<record_id>", methods=["GET", "POST"])
def edit_record(record_id):
    if session:
        if request.method == "POST":
            car_details = mongo.db.cars.find_one(
                {"reg_no": request.form.get("reg_no")})
            make = car_details["make"]
            model = car_details["model"]

            garage_details = mongo.db.garage.find_one(
                {"garage_name": request.form.get("garage_name")})
            contact = garage_details["garage_contact"]
            phone = garage_details["garage_phone"]

            paid = "yes" if request.form.get("service_paid") else "no"

            edit_details = {
                "reg_no": request.form.get("reg_no"),
                "username": session["user"],
                "service_date": request.form.get("service_date"),
                "service_cost": request.form.get("service_cost"),
                "service_desc": request.form.get("service_desc"),
                "service_paid": paid,
                "odometer_reading": request.form.get("odometer_reading"),
                "car_make": make,
                "car_model": model,
                "garage_name": request.form.get("garage_name"),
                "garage_contact": contact,
                "garage_phone": phone,
                "service_items": request.form.getlist("service_items")

            }
            mongo.db.maintenance.update(
                {"_id": ObjectId(record_id)}, edit_details)
            record = mongo.db.maintenance.find_one(
                {"_id": ObjectId(record_id)})
            flash("Record Updated")
            return render_template("detailed_record.html", record=record)

        record = mongo.db.maintenance.find_one({"_id": ObjectId(record_id)})
        if session["user"] == "admin":
            cars = mongo.db.cars.find()
        else:
            cars = mongo.db.cars.find({"user": session["user"]})
        garages = mongo.db.garage.find().sort("garage_name", 1)

        return render_template(
            "edit_record.html", cars=cars, garages=garages, record=record)

    flash("Login to site required")
    return redirect(url_for("login"))


# Page for user to add a new car.
@app.route("/addcar/<username>", methods=["GET", "POST"])
def addcar(username):
    if session:
        active_user = mongo.db.directory.find_one(
            {"username": session["user"]})
        username = active_user["username"]
        email = active_user["email"]

        if request.method == "POST":
            already_registered = mongo.db.cars.find_one(
                {"reg_no": request.form.get("reg_no")})

            if already_registered:
                flash("A car with this reg #, already registered")
                return render_template(
                    "addcar.html", username=username, email=email)

            car_details = {
                "reg_no": request.form.get("reg_no"),
                "user": username,
                "email": email,
                "make": request.form.get("make"),
                "model": request.form.get("model")
            }
            mongo.db.cars.insert_one(car_details)
            flash("Your car has been added to the database")

        return render_template("addcar.html", username=username, email=email)
    flash("Login to site required")
    return redirect(url_for("login"))


# Functions to delete a record from the DB.
@app.route("/delete_record/<record_id>")
def delete_record(record_id):
    mongo.db.maintenance.remove({"_id": ObjectId(record_id)})
    flash("Record has been removed from the DB.")
    return redirect(url_for("tracker"))


# Functions for add gagrage page - add garage, activate / deactivate
@app.route("/add_garage", methods=["GET", "POST"])
def add_garage():
    if session:
        if request.method == "POST":
            garage_exists = mongo.db.garage.find_one(
                {"garage_name": request.form.get("garage_name")})

            if garage_exists:
                flash("A garage with this name already exists in the DB")
                return redirect(url_for("add_garage"))

            garage_details = {
                "garage_name": request.form.get("garage_name"),
                "garage_contact": request.form.get("garage_contact"),
                "garage_phone": request.form.get("garage_phone"),
                "garage_status": "active"
                }
            mongo.db.garage.insert_one(garage_details)
            flash("Garage details added to the DB")
            return redirect(url_for("add_garage"))

        lst_garages = mongo.db.garage.find().sort("garage_name", 1)
        return render_template("add_garage.html", lst_garages=lst_garages)
    flash("Login to site required")
    return redirect(url_for("login"))


# Deactivate Garage
@app.route("/deactivate_garage/<garage_id>")
def deactivate_garage(garage_id):
    mongo.db.garage.update(
        {"_id": ObjectId(garage_id)}, {"$set": {"garage_status": "inactive"}})
    flash("Selected garage set to inactive")
    return redirect(url_for("add_garage"))


# Activate Garage
@app.route("/activate_garage/<garage_id>")
def activate_garage(garage_id):
    mongo.db.garage.update(
        {"_id": ObjectId(garage_id)}, {"$set": {"garage_status": "active"}})
    flash("Selected garage set to active")
    return redirect(url_for("add_garage"))

# end add garage

# Log out & remove user session


@app.route("/logout")
def logout():
    flash("You have been logged out")
    session.pop("user")
    return redirect(url_for("login"))

if _name_ == "_main_":
    app.run(host='0.0.0.0', port=5000, debug=True)