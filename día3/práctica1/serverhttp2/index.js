var Http = require( 'http' );
var server = Http.createServer(function(request,response){
    console.log('Alguien entró');
    response.write("Hola desde el node");// no se envía por que no se indica fin de la respuesta

});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
