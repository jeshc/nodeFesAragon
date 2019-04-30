var Http = require('http');
var server = Http.createServer();

server.listen(3000, function() {
  console.log('Escuchando conexión en el puerto 3000');
});
