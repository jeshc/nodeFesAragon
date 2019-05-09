var mongoose = require('mongoose');
var Alumno = require('./models/alumnos.js');

mongoose.connect('mongodb+srv://hcjesus:dios0987@cluster0-p1uhr.gcp.mongodb.net/facultadDB?retryWrites=true', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));

function findAlumnoPorNumCta(nc){
  Alumno.find({numeroCuenta:nc},function(err,documentos){
    console.log(documentos);
  });
}

function findByNombre(nom){
  Alumno.find({'nombre.primer':nom},function(err,documentos){
    console.log(documentos);
  });
}

function cambiarNombre(numcta, nuevoNombre){
  Alumno.findOneAndUpdate({numeroCuenta:numcta},{'nombre.primer':nuevoNombre},function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}


function main() {

  //findAlumnoPorNumCta(223344);
  //findByNombre("Jesús");
  //cambiarNombre("4444444","RENÉ");

}

main();    // ejecutamos main
