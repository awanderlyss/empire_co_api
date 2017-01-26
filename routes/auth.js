// modules =================================================
var express = require('express');
var router  = express.Router();
var User = require('../models/user');// fetching the user model
// expose user route =======================================
module.exports = function(app, passport) {
  // login
  router.post('/login', passport.authenticate('local'), function(req, res) {
    res.json({user: req.user});
  });
  // logout
  router.post('/logout', function(req, res) {
    req.logout();
    res.json({message: "Logged Out!", user: req.user});
  });
// register routes =========================================
  app.use('/api', router);
};
