/*
ahora escribamos HTML antes de continuar
HEaders: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html
header Content-Type : http://www.iana.org/assignments/media-types/media-types.xhtml

e indiquemos que la respuesta esta lista y se envía.

Ejercicio:
res.write(request.url);
imprimir el objeto request en consola
examinar headers y url

info:

*/
var Http = require( 'http' );

var server = Http.createServer(function(request,response){
    //console.log('Alguien entró');
    response.writeHead(200, {'Content-Type': 'text/html'}); // cabecera http
    response.write("<h1>Hola desde el node 3</h1>");// no se envía por que no se indica fin del documento
    response.end(); // al fín se envía

});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
