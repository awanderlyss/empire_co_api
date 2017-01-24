// grabbing files needed ================================
var mongoose  = require("./connection");
var seedData  = require("./seeds");

var Product = require("../models/product");

Product.remove({}).then(function(){
  Product.collection.insert(seedData).then(function(){
    process.exit();
  });
});
