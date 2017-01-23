// fetching the product model
var Product = require('./models/product');
var express = require('express');
var router = express.Router()
module.exports = function(app) {
  router.use(function(req, res, next){
    console.log("Something is happening");

  });
  router.get("/", function(req, res){
    res.json({message:"Welcome to Empire Co"});
  });
  app.use("/",router)
};
