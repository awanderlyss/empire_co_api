// modules =================================================
var express = require('express');
var router  = express.Router();
var Product = require('../models/product');// fetching the product model
// expose product routes ===================================
module.exports = function(app) {
  // test route to make sure everything is working
  router.get('/', function(req, res) {
    res.json({ message: 'WELCOME TO THE EMPIRE CO API!' });
  });
  // on routes that end in /products
  router.route('/products')
    // create
    .post(function(req, res) {
      Product.create(req.body.product)
        .then((product) => { res.json(product); })
        .catch((err) => { if(err) console.log(err); });
    })
    // index
    .get(function(req, res) {
      Product.find({})
        .then((products) => { res.json(products); })
        .catch((err) => { if(err) console.log(err); });
    });
  // on routes that end in /products/:title
  router.route('/products/:id')
    // show
    .get(function(req, res) {
      Product.findById(req.params.id)
        .then((product) => { res.json(product); })
        .catch((err) => { if(err) console.log(err); });
    })
    // update
    .put(function(req, res) {
      Product.findOneAndUpdate({_id: req.params.id}, req.body.product, {new: true})
        .then((product) => { res.json(product); })
        .catch((err) => { if(err) console.log(err); });
    })
    // destroy
    .delete(function(req, res) {
      Product.findOneAndRemove({_id: req.params.id})
        .then((user) => {  res.json({ message: 'Account Terminated!'}); })
        .catch((err) => { if(err) console.log(err); });
    });
    // register routes =========================================
    app.use('/api', router);
};
