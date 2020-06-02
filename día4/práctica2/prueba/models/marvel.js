var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var marvelSchema = Schema({
  id:Number,
  nombre:String,
  poder:String,
  alias:String,
  conCapa:Boolean,
  imagen:String,
  villano:Boolean
});

module.exports = mongoose.model('Marvel',marvelSchema);
