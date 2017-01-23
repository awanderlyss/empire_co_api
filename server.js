// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');

// config ===========================================
var port = process.env.PORT || 8080; // set our port

// connecting to mongodb
mongoose.connect('mongodb://localhost/beer_api');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes ==================================================
require('./app/routes')(app); // config routes

// start app ===============================================
app.listen(port, () => {
  console.log(`Magic happens on port ${port}`);
});
