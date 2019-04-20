
/*

*/

function duplicaN(mensaje,n, callback){
    console.log(mensaje);
    callback(mensaje,n);
}

//llamada
duplicaN("Duplicando",5, function(m,x){
//do some custom redirect logic
for ( i = 0; i < x; i++) {
  console.log(m);

}
});
