// set up ======================================================================
// get all tools needed
var express       = require('express');
var app           = express();
var mongoose      = require('mongoose');
var passport      = require('passport');
var flash         = require('connect-flash');

var morgan        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var session       = require('express-session');

// config ==================================================
var port = process.env.PORT || 8080; // set our port

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(methodOverride('X-HTTP-Method-Override'));

//mongoose
require('./app/db/connection');

// routes ==================================================
require('./app/routes')(app); // config routes

// start app ===============================================
app.listen(port, () => {
  console.log(`Magic happens on port ${port}`);
});
