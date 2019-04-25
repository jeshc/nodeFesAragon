// retrollamada1.js
function duplica2(mensaje, callback){
    console.log(mensaje);
    callback();
}

//llamada
duplica2("Duplicando", function(){
//hacemos algo de lógica de negocio aquí
console.log("Yo soy la retrollamada");
});
