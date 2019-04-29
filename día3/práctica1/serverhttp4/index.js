/*
 Ahora hagamos lo mismo pere deleguemos a una función proporcionar el texto
 de respuesta. Y pongamos algo de color html.
*/
var Http = require( 'http' );

var data=function(){
  return '<h1 style="color:green" > Hola desde node 4</h1>';
}

var server = Http.createServer(function(request,response){
    console.log('Alguien entró');
    response.writeHead(200, {'Content-Type': 'text/html'}); // cabecera http
    response.write(data());
    response.end(); // al fín se envía

});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
