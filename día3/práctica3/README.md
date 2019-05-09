# mongoose
Mongoose framework de manejo de datos para bases de datos MongoDB, proporciona una gran cantidad de funciones que permiten manipular objetos desde programas en Node.js, lo cual facilita la integración de datos a este tipo de sistemas.

La documentación oficial de mongoose se encuenta en la página:
[documentación de Mongoose](https://mongoosejs.com/docs/api.html#)

Para manipular una colección de mongoDB primero se requiere crear un Esquema Mongoose.

```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlumnoSchema =  Schema({
  numeroCuenta: String
});
```

En este caso se está creando el esquema AlumnoSchema y a partir de el se puede invocar todas las funciones, como por ejemplo la función ```AlumnoSchema.save({},callback(err,data){}) ```

## Preparar mongoose como módulo
Para facilitar la manipulación de datos con mongoose es buena idea crear un módulo para definir el esquema de docuemtnos mongodb con los que se trabajará en el programa.

En este caso tabajaremos con datos de alumno, para lo cuál se define una estructura como se observa en la imagen:

![Screenshot](image1.PNG)

Exponiendo la definición del esquema con **exports**
```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlumnoSchema =  Schema({
  numeroCuenta: String
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
```
### Cómo conectarse a mongoDB
Para conectarnos a mongodb se requiere la cadena de conexion que nos proporciona el servidor de MongoDB Atlas.


   ![Screenshot](image2.PNG)

El código para conectarnos es el siguiente:
```
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hcjesus:dios0987@cluster0-p1uhr.gcp.mongodb.net/facultadDB?retryWrites=true', {
    useNewUrlParser: true
  }).then(() => {
    console.log('Conectado a Mongo DB Atlas')
  })
  .catch(err => console.log(err));
```

Con o cual ya tenemos lo necesario para hacer un primer ejemplo.

### Primer ejemplo completo

En el proyecto **mongoose0** tenemos el siguiente código en el archivo principal *index.js*.
Se puede observaar que incluimos el módulo **alumnos.js** que se definió previamente, para usarlo como objeto e invocar las funciones del framework **mongoose**.

```
//index.js
var mongoose = require('mongoose');
var Alumno = require('./models/alumnos.js');

mongoose.connect('mongodb+srv://hcjesus:dios0987@cluster0-p1uhr.gcp.mongodb.net/facultadDB?retryWrites=true', {
    useNewUrlParser: true
  }).then(() => {
    console.log('Conectado a Mongo DB Atlas')
  })
  .catch(err => console.log(err));

function nuevoAlumno() {
  var alum = Alumno({
    numeroCuenta: "223344"
  });

  alum.save(function(err, data) {
    if (err) {
      console.log("------------------------ERROR --------------------------");
    } else {
      console.log("--------------------------OK ---------------------------");
    }
  });
}


function main() {
  nuevoAlumno();
}

main(); // ejecutamos main
```
La ejecución esperada es la siguiente:

![Screenshot](image2_1.PNG)

En la base de datos lo siguiente:

![Screenshot](image3.PNG)

### mongoose1
En este proyecto se modificó el modelo de alumno para tener algo mas completo.

```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
```
##### insertar un alumno
Para crear un nuevo documento tenemos la siguiente funcion de ejemplo:
```
function nuevoAlumno() {

  var alum= Alumno({
    numeroCuenta: "1111111",
    nombre: {
      primer: "Jesús",
      paterno: "Hewrnandez",
      materno: "Cabrera"
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

```

##### insertar varios alumnos

```

function nuevosAlumnos() {

  var alumnos=[
    { numeroCuenta: "1111111",nombre: {primer: "Jesús", paterno: "Hernandez", materno: "Cabrera" },semestre: 6, promedio: 7.99},
    { numeroCuenta: "2222222",nombre: {primer: "Diego", paterno: "Pérez", materno: "Zedillo" },semestre: 2, promedio:8.2},
    { numeroCuenta: "3333333",nombre: {primer: "Alex", paterno: "Pérez", materno: "Obrador" },semestre: 3, promedio: 7.3},
    { numeroCuenta: "4444444",nombre: {primer: "René", paterno: "Dávila", materno: "Moreno" },semestre: 4, promedio: 7.1},
    { numeroCuenta: "5555555",nombre: {primer: "Ari", paterno: "Olarte", materno: "Paz" },semestre: 8, promedio: 9.2},

  ];


  Alumno.collection.insert(alumnos,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}
```

Para probar ambas funciones, comenta y descomenta  las llamadas alas funciones en la función main.
```
function main() {
  //nuevoAlumno();
  nuevosAlumnos();
}

main();    // ejecutamos main
```

![Screenshot](insertaVarios.PNG)

Resultado:

![Screenshot](insertaVariosREsul.PNG)

### mongoose2

```
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
```

### mongoose3
```
function deleteAlumnoByNumCta(nc){
  Alumno.findOneAndDelete({numeroCuenta:nc},function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}

function main() {
  deleteAlumnoByNumCta("4444444");
}
```

### Ejercicio mongoose4
Modificar el modelo libro y el index.js para insertar un nuevo documento del tipo libro con los campos:

- Autor
- Titulo
- Genero
- Edición
- Editorial
- Numero de páginas
- sinopsis
