
var Http = require('http');
var url = require('url');

var server = Http.createServer(function(request, response) {

  var uri = (request.connection.encrypted ? 'https': 'http') + '://' + request.headers.host + request.url;
  var uri_parseada = url.parse(uri,true);
  console.log(uri_parseada);
  console.log('-----------------------------');
  console.log(uri_parseada.path);
  if(uri_parseada.path == "/hola"){
  	response.writeHead(200,"Content-Type:text/html");
  	response.write("<h1 style="color:green" > Hola a todos</h1>");
  }
  if(uri_parseada.path == "/saludo"){
  	response.writeHead(200,"Content-Type:text/json");
  	response.write("{\"metodo\":\"GET\" , \"mensaje\":\"Hola\"}");
  }



  response.end();
});

server.listen(3000, function() {
  console.log('Escuchando conexión en el puerto 3000');
});
