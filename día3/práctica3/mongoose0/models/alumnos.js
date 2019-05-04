var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlumnoSchema =  Schema({
  numeroCuenta: String
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
