Database
The application, would require a database backend, We chose mongoDB for the project. The database has four collections within it;

Directory;

The directory collection holds all the user data, records are created when a user registers on the site. Data in the collection;

Name
e-mail address
user Name
password (stored in hashed format for security)
Cars;

The cars collections, holds data on cars registered on the site. Users can register their cars and only registered cars are available to create maintenance records for. Data in the collection;

Car Registration
make
model
user
e-mail Note: user & e-mail are auto populated to the DB based on logon user at the time of registration.
Garage;

The garages collection has a list of garages that can be used when creating a record. Only the Admin can add or edit the list of garages. Data in the collection;

Garage Name
Garage Contact Name
Garage Contact Phone No.
Garage Status (active, when available for selection by user)
Maintenance;

The maintenance collection is populated with the records created by users. Data in the collection;

Car Registration (user can only select pre-registered cars under their username)
Car make - Populated from Car collection based on reg number selected
Car Model - same as car make.
username - based on the user logged when the record is created
Service Date - user input as the time of record creation
Service cost - user input as the time of record creation
Service Paid - user input as the time of record creation, can be yes / no
Service Description - - user input at the time of record creation short description of service
Odometer Reading - user input as the time of record creation
Garage Name - selected from list of active garages in garage collection
Garage Contact - populated from Garage collection based on reg number selected
Garage Phone No. - as garage name above
Service Items - as garage name above
