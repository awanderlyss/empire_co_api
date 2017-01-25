// modules =================================================
var express     = require('express');
var Product     = require('./models/product');// fetching the product model
var apiRouter   = express.Router();
var loginRouter = express.Router();

// expose routes
module.exports = function(app) {

// apiRouter routes =========================================

  // console logs when the api is being used
  apiRouter.use(function(req, res, next) {
    console.log("Something is happening");
    next(); // make sure we go to the next routes and don't stop here
  });

  // test route to make sure everything is working
  apiRouter.get('/', function(req, res) {
    res.json({ message: 'WELCOME TO THE EMPIRE CO API!' });
  });


  // on routes that end in /products
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

  // on routes that end in /products/:title
  apiRouter.route('/products/:id')

    // show
    .get(function(req, res) {
      Product.findById(req.params.id)
        .then((product) => { res.json(product); })
        .catch((err) => { if(err) console.log(err); });
    })

    // update
    .put(function(req, res) {
      Product.findOneAndUpdate({_id: req.params.id}, req.body.product, {new: true})
        .then((product) => {
          res.redirect(`/products/${product.id}`);
        })
        .catch((err) => { if(err) console.log(err); });
    })

    // destroy
    .delete(function(req, res) {
      Product.findOneAndRemove({_id: req.params.id})
        .then(() => { res.redirect('/products'); })
        .catch((err) => { if(err) console.log(err); });
    });
// end of apiRouter routes =====================================

// loginRouter routes ==========================================

  

// end of loginRouter routes ===================================

    // register routes =========================================
    app.use('/api', apiRouter);

};
