var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var controller = require('./api/controllers/movie.users.controller');
var api = require('./api/api')


var app= express();

app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "Content-Type, Authorization")
    next();
})


app.use('/api', api)


mongoose.connect('mongodb://localhost:27017/test', function(err, db) {
    if (!err) {
        console.log("connected to mongoose")
        database = db
    } else {
        console.log(err)
    }


})



module.exports = app