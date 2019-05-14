var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComputadoraSchema =  Schema({
  id: Number,
  marca:String,
  modelo:String
});

module.exports = mongoose.model('Computadora', ComputadoraSchema);
