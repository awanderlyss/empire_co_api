// modules =================================================
var express  = require('express');
var passport = require('passport');
var router   = express.Router();
var User     = require('../models/user');// fetching the user model
// expose user route =======================================
module.exports = (app, passport) => {
  // on routes that end in /users
  router.route('/users')
    // register (create)
    .post(function(req, res) {
      var user = new User(req.body.user);
      User.register(user, req.body.user.password)
        .then((user) => { res.json(user); })
        .catch((err) => { if(err) console.log(err); });
    })
    // index
    .get(function(req, res) {
      User.find({})
        .then((users) => { res.json(users); })
        .catch((err) => { if(err) console.log(err); });
    });
    // on routes that end in /users/:title
    router.route('/users/:id')
      // show
      .get(function(req, res) {
        User.findById(req.params.id)
          .then((user) => { res.json(user); })
          .catch((err) => { if(err) console.log(err); });
      })
      // update
      .put(function(req, res) {
        Product.findOneAndUpdate({_id: req.params.id}, req.body.user, {new: true})
          .then((user) => {
            res.json(user);
          })
          .catch((err) => { if(err) console.log(err); });
      })
      // destroy
      .delete(function(req, res) {
        Product.findOneAndRemove({_id: req.params.id})
          .then(() => { })
          .catch((err) => { if(err) console.log(err); });
      });
    // register routes =========================================
    app.use('/api', router);
};
