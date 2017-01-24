// modules =================================================
var express = require('express');
var Product = require('./models/product');// fetching the product model


var apiRouter     = express.Router();
var welcomeRouter = express.Router();

module.exports = function(app) {
  // console logs when the api is being used
  apiRouter.use(function(req, res, next) {
    console.log("Something is happening");
    next();
  });

  // welcome screen (test route)
  apiRouter.get('/', function(req, res) {
    res.json({ message: 'WELCOME TO THE EMPIRE CO API!' });
  });

  // routes for api start here =============================
  apiRouter.route('/products')

  // index
    .get(function(req, res) {
      Product.find({})
        .then((products) => { res.json(products); })
        .catch((err) => { if(err) console.log(err); });
    });

    // register routes
    app.use('/api', apiRouter);

};
