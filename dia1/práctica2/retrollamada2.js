
/*

*/

function duplicaN(mensaje,n, callback){
    console.log(mensaje);
    callback(n);
}

//llamada
duplicaN("Duplicando",5, function(x){
//do some custom redirect logic
for ( i = 0; i < x; i++) {
  console.log("Yo soy la retrollamada");

}
});
