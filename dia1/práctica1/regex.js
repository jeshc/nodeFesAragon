var str = "Esto es un texto muy largo?";
  var patron = /[t]/g;
  var resultado = str.match(patron);
  console.log(resultado);


var t=str.replace(/to/g,"TA");
console.log(t);
console.log(str);
