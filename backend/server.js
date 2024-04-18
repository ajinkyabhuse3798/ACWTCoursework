const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "3798",
    database: "checkmycar"
})

//api for inserting new user data
app.post('/signup', (req, res) => {
  console.log(req);
    const sql = "INSERT INTO login (`username`, `email`, `password`) VALUES (?, ?, ?)";
    console.log(sql);
    const values = [
        req.body.username,
        req.body.email,
        req.body.password
    ];
    db.query(sql, values, (err, data) => {
        if(err){
            console.error(err);
            return res.json("Error");
        }
        return res.json(data);
    });
});

//api for login 
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success");
        }
        else{
            return res.json("Fail");
        }
    });
});

//api for getitng the post data from post table

  

app.listen(3000, ()=>{
    console.log("listening");
})
