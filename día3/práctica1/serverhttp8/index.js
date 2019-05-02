
var Http = require('http');
var url = require('url');

var server = Http.createServer(function(request, response) {

  var uri = (request.connection.encrypted ? 'https': 'http') + '://' + request.headers.host + request.url;
  var uri_parseada = url.parse(uri,true);
  console.log(uri_parseada);
  response.end('fin');
});

server.listen(3000, function() {
  console.log('Escuchando conexión en el puerto 3000');
});
