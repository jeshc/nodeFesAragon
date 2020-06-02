var Http = require('http');
var server = Http.createServer( (request,response)=>{
  console.log("Alguien entró!!!");
  response.write("<h1>Hola http nodejs</h1>");
  response.end();
} );

server.listen(3000, function() {
  console.log('Escuchando conexión en el puerto 3000');
});
