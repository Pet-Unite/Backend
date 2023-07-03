
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin:1234@cluster0.7hznz3l.mongodb.net/?retryWrites=true&w=majority')

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose