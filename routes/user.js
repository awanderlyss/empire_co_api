// modules =================================================
var express  = require('express');
var passport = require('passport');
var router   = express.Router();
var User     = require('../models/user');// fetching the user model

// expose user route =======================================
module.exports = (app, passport) => {

  router.route('/users')
    //register
    .post(function(req, res) {
      var user = new User(req.body.user);
      User.register(user, req.body.user.password)
        .then((user) => { res.json(user); })
        .catch((err) => { if(err) console.log(err); });
    });

  app.use('/api', router);


};
