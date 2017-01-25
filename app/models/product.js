// modules =================================================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create model ============================================
var ProductSchema = new Schema({
  title: String,
  description: String,
  img_url: String,
  price: Number
});

module.exports = mongoose.model('Product', ProductSchema);
