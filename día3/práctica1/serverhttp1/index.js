var Http = require( 'http' );
var server = Http.createServer(function(request,response){
    console.log('Alguien entró');
    console.log(request.url);

});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
