var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema =  Schema({
  id:Number,
  name:String,
  lastname:String,
  age:Number
});

module.exports = mongoose.model('User', UserSchema);
