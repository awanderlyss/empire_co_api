// modules =================================================
var express     = require('express');
var Product     = require('./models/product');// fetching the product model
var apiRouter   = express.Router();
var loginRouter = express.Router();

// expose routes
module.exports = function(app, passport) {

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

// passport routes ==========================================
  // login
  app.get('/login', function(req, res) {
    res.json({ message: req.flash('loginMessage') });
  });
  // signup
  app.get('/signup', function(req, res) {
    res.json({ message: req.flash('signupMessage') });
});

  // process the signup form
  // app.post('/signup', do all our passport stuff here);

  // profile of logged in user
  app.get('/profile', isLoggedIn, function(req, res) {
      res.json( {user : req.user });// get the user out of session
  });

  // logout
  app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


// end of passport routes ===================================

    // register routes =========================================
    app.use('/api', apiRouter);

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}
