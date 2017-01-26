// modules =================================================
var mongoose              = require('../db/connection');
var Schema                = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

// create model ============================================
var UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    required: true
  },
  cart: {}
});

UserSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

module.exports = mongoose.model('User', UserSchema);
