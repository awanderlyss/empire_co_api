// grabbing files needed ================================
var mongoose  = require("./connection");
var seedData  = require("./seeds");
var Product = require("../models/product");

// remove products before inserting seedData in DB
Product.remove({}).then(function(){
  Product.collection.insert(seedData)
    .then(function(){ process.exit();});
});
