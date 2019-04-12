
/*

*/

function duplica2(mensaje, callback){
    console.log(mensaje);
    callback();
}

//llamada
duplica2("Duplicando", function(){
//do some custom redirect logic
console.log("Yo soy la retrollamada");
});
