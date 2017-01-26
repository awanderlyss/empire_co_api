// modules =================================================
var mongoose  = require("mongoose");
mongoose.Promise = global.Promise;
// connection to mongolab or localhost
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/empireCo');
// exposing mongoose
module.exports = mongoose;
