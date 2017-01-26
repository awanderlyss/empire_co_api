// modules =================================================
var express = require('express');
var router  = express.Router();
var User = require('../models/user');// fetching the user model

// expose user route =======================================
module.exports = (app, passport) => {
  //register
  router.post('/register', (req, res) =>{
    var user = new User(req.body.user);
    User.register(user, req.body.user.password)
      .then((user) => { res.json(user); })
      .catch((err) => { if(err) console.log(err); });
  });

  // login
  router.post('/login', (req, res) => {
    res.json({user: req.user});
  });

  // logout
  router.post('/logout', (req, res) => {
    req.logout();
    res.json({message: "Logged Out!", user: req.user});
  });

  app.use('/api', router);


};
