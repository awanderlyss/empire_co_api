// modules =================================================
var mongoose              = require('../db/connection');
var Schema                = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var ProductSchema         = require('../models/product');
// create model ============================================
var UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname:  String,
  email:     { type: String, required: true },
  // ERROR: Undefined type `model` at array `products`
  //products:  [ProductSchema]
});
// https://github.com/saintedlama/passport-local-mongoose
// set option usernameField to equal user email
UserSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
// expose model ============================================
module.exports = mongoose.model('User', UserSchema);
