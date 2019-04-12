
function notifyme(msg, callback){
    console.log(msg);
    callback();
}

notifyme("Hola de nuevo", function(){
//do some custom redirect logic
console.log("Otra lógica");
});
