const express = require("express");
const app = express();

app.get('/', (req,res) => {
    res.send("hello world");
});

app.get('/api', (req,res) =>{
    res.send("this iss api call");
});
app.get('/api/courses', (req,res) =>{
    res.send("this is the api call");
});

app.listen(3000, () => console.log("listening on port 3000"));