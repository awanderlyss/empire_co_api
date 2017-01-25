// set up ======================================================================
// get all tools needed
var express        = require('express');
var app            = express();
var port           = process.env.PORT || 8080; // set our port
var mongoose       = require('mongoose');
var passport       = require('passport');
var flash          = require('connect-flash');

var morgan         = require('morgan');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var session        = require('express-session');
var methodOverride = require('method-override');

// config ==================================================

// connect to database
require('./app/db/connection');

// pass passport for configuration
// require('./config/passport')(passport);

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride()); // simulate DELETE and PUT


// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes
require('./app/routes')(app, passport); // config routes

// start app ===============================================
app.listen(port, () => {
  console.log(`Magic happens on port ${port}`);
});
