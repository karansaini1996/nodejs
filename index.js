const express = require("express");
const app = express();
const fs= require('fs');
const { request } = require("http");

const data = require('./user.json');
app.use(express.json()) // to get the req body access.
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// const db = require('./db');
var Port = 5000;

app.get('/', (req,res) => {
    fs.readFile("./user.json","utf-8", (err, data) =>{
        // console.log(data);
        // res.send(data);
        // const objdata = JSON.parse(data);
        res.send(data);
    });
    //res.send(data);
    console.log(data);
});
app.post ('/',(req,res) =>{
    console.log("created user");
    console.log(req.body);
    if (!req.body.name){
        res.status(400)
        return res.json({error: " please enter name, last_name and age"})
    }
    const user = {
        name: req.body.name,
        last_name: req.body.last_name,
        age: req.body.age,
        id : data.length + 1,
        
    }
   
    data.push(user);
    
    res.send(data);
})

app.get('/api', (req,res) =>{
    res.send("this iss api call");
});
app.get('/api/courses', (req,res) =>{
    res.send("this is the api call");
});

app.listen(Port, () => console.log(`listening on port: ${Port}`));