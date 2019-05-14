var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('useFindAndModify', true);
var AlumnoSchema =  Schema({
  numeroCuenta: String,
  nombre: {
    primer: String,
    paterno: String,
    materno: String
  },
  semestre: Number,
  promedio: Number
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
