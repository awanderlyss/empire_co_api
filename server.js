// declaring variables that require depends
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

// connecting to mongodb
mongoose.connect('mongodb://localhost/beer_api');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
