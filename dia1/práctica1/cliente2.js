//cliente.js
var cliente={
  "numCliente": 1234,
  "nombre":{
            "primerNombre":"Mario",
            "segundoNombre":null,
            "apellidoPaterno":"Pérez",
            "apellidoMaterno":"García"
          },
  "telefonos":["04455-2345-2344","55-3987-3432","(721)33221212"],
  "dirección":{
                "calle":"Bosques de Africa",
                "numeroExt":"23-B",
                "colonia":"Bosques de Aragón",
                "cp":57127
              },
   "activo":true,
   "balance":231521.89,
   "prestamos":null,
   "retiro":function (val) {
     this.balance-=val;
     console.log(this.balance);
   }
}
