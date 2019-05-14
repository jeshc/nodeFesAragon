var express = require("express");
var port = 3000;
var app = express();
var logger = require('morgan');
var path=require('path');
var publicPath=path.resolve(__dirname,"public");
app.use(express.static(publicPath));

app.use(logger('dev'));
app.get("/hola", function(request, response) {
  response.send("¡Hola mundo Express !");
});
app.post("/hola", function(request, response) {
  response.send("¡Hola mundo Express POST!");
});

app.listen(port, function() {
  console.log("Servidor express iniciado, en el puerto 3000.");
});
