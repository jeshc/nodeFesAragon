var Http = require( 'http' );

var server = Http.createServer(function(request,response){
    //console.log('Alguien entró');
    console.log(request.method);
    response.writeHead(200, {'Content-Type': 'text/html'}); // cabecera http
    console.log(request.headers);
    console.log(request.url);
    // if request.method es igual a GET entonces hacer algo
    // if request.method es POST entonces hacemos otr cosa
    if(request.method == 'GET'){
      response.write("<h1>Hola desde el node 3</h1>");// no se envía por que no se indica fin del documento
    }else{
      response.write("<h1>Adios mundo cruel</h1>");// no se envía por que no se indica fin del documento

    }

    response.end(); // al fín se envía
});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
