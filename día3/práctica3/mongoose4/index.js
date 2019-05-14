var mongoose = require('mongoose');
var Alumno = require('./models/alumnos.js');

mongoose.connect('mongodb+srv://hcjesus:dios0987@cluster0-p1uhr.gcp.mongodb.net/facultadDB?retryWrites=true', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));


function nuevoLibro(){
// tu código aquí
}


function main() {
  nuevoLibro();
}

main();    // ejecutamos main
