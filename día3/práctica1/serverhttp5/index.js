var Http = require('http');
var fs = require('fs');

var server = Http.createServer(function(request, response) {
  fs.readFile('saludo.html', function(err, data) {
    if (err) {
      console.log(err);
      response.end("error");
    } else {
      console.log(request.method);
      response.writeHead(200, {
        'Content-Type': 'text/html'
      }); // cabecera http
      response.write(data);
      response.end(); // al fín se envía
    }
  });


});

server.listen(3000, function() {
  console.log('Escuchando conexión en el puerto 3000');
});
