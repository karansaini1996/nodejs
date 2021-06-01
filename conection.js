const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/karan',{userNewUrlParser : true})
.then(() => console.log("connection has been made"))
.catch( (err) => console.log(err));