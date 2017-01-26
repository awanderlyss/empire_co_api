// set up ======================================================================
// get all tools needed
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var passport       = require('passport');

var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var session        = require('cookie-session');
var methodOverride = require('method-override');

// config ==================================================
var port = process.env.PORT || 8080; // set our port

// connect to database
require('./db/connection');

// set up our express application
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: false })); // why true or false?
app.use(bodyParser.json());
app.use(methodOverride()); // simulate DELETE and PUT

// passport/passport-local
// https://github.com/saintedlama/passport-local-mongoose
var User = require('./models/user');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes
require('./routes/product')(app);
require('./routes/auth')(app, passport);

// start app ===============================================
app.listen(port, () => {
  console.log(`Magic happens on port ${port}`);
});
