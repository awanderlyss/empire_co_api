// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// config ==================================================
var port = process.env.PORT || 8080; // set our port
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/db/connection');

// routes ==================================================
require('./app/routes')(app); // config routes

// start app ===============================================
app.listen(port, () => {
  console.log(`Magic happens on port ${port}`);
});
