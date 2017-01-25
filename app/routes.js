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

    // create
    .post(function(req, res) {
      // code here
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

  apiRouter.route('/products/:title')

    // show
    .get(function(req, res) {
      Product.findOne({title: req.params.title})
        .then((product) => { res.json(product); })
        .catch((err) => { if(err) console.log(err); });
    })

    // update
    .put(function(req, res) {
      Product.findOneAndUpdate({_id: req.params._id}, req.body.product, {new: true})
        .then((product) => {
          res.redirect(`/products/${product.title}`);
        })
        .catch((err) => { if(err) console.log(err); });
    })

    // destroy
    .delete(function(req, res) {
      Product.findOneAndRemove({name: req.params.title})
        .then((product) => { res.redirect('/products'); })
        .catch((err) => { if(err) console.log(err); });
    });

    // register routes
    app.use('/api', apiRouter);
};
