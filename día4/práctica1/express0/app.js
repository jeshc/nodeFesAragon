var express = require("express");
var port = 3000;
var app = express();
var logger = require('morgan');

app.use(logger('dev'));
app.get("*", function(request, response) {
  response.send("¡Hola mundo Express !");
});

app.listen(port, function() {
  console.log("Servidor express iniciado, en el puerto 3000.");
});
