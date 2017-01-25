var mongoose  = require("mongoose");
mongoose.Promise = global.Promise;

require('../models/product');

if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGOLAB_URL);
}else{
  mongoose.connect("mongodb://localhost/empire_co_api");
}

module.exports = mongoose;
