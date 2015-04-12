// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express')
var app = express()
var port = process.env.PORT || 3002
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var http = require('http')
var mongoose = require('mongoose');


// DATBASE CRUMS ======================================
mongoose.connect('mongodb://priceradmin:bluecakes1@ds061611.mongolab.com:61611/pricer');

app.use(bodyParser.json()) // get information from html forms
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(__dirname + '/public'))



// routes ======================================================================
require('./app/routes.js')(app) // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port)
console.log('The magic happens on port ' + port)


// indicoLine(batch)
// batch.topic
// batch.probability

// getRevl(batch)
// batch.relevancy = asdads


// res.send()