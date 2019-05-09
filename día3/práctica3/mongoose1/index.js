var mongoose = require('mongoose');
var Alumno = require('./models/alumnos2.js');

mongoose.connect('mongodb+srv://hcjesus:dios0987@cluster0-p1uhr.gcp.mongodb.net/facultadDB?retryWrites=true', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));

function nuevoAlumno() {

  var alum= Alumno({
    numeroCuenta: "223344",
    nombre: {
      primer: "Jose",
      paterno: "García",
      materno: "Pérez"
    },
    semestre: 6,
    promedio: 7.99
  });

  alum.save(function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
    }
  });
}

function main() {
  nuevoAlumno();
}

main();    // ejecutamos main
