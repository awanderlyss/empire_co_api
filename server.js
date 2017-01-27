// set up ======================================================================
// get all tools needed
var express        = require('express');
var app            = express();
var passport       = require('passport');

var cors           = require('cors');
var logger         = require('morgan');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var session        = require('cookie-session');
var methodOverride = require('method-override');

// config ==================================================
var port = process.env.PORT || 8080; // set our port

// connect to database
require('./db/connection');

// set up our express application
app.use(cors());
app.use(logger('dev')); // log
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true })); // why true or false?
app.use(bodyParser.json());
app.use(methodOverride()); // simulate DELETE and PUT

// passport/passport-local
// https://github.com/saintedlama/passport-local-mongoose
var User = require('./models/user');
passport.use(User.createStrategy());
//http://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  secret: process.env.SESSION_SECRECT || 'lazydog',
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// routes
// test route (welcome message)
var router = express.Router();
router.get('/', function(req, res) {
  res.json({ message: 'WELCOME TO THE EMPIRE CO API!' });
});
require('./routes/auth')(app, passport);
require('./routes/products')(app);
require('./routes/users')(app, passport);
// register (welcome) route
app.use('/api', router);


// start app ===============================================
app.listen(port, () => {
  console.log(`Magic happens on port ${port}`);
});
