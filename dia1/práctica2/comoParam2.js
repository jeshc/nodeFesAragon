//como parametro.js
var incrementa = function(numero) {
  return numero + 1;
}

var duplicar = function(numero){
  return numero+numero;
}
var procesar = function(x, laFuncion) {
  return laFuncion(x);
}
procesar(10, incrementa);

procesar(procesar(10,incrementa),incrementa);

procesar(procesar(10,duplicar),incrementa);


//procesar(procesar(procesar(10,incrementa),incrementa),duplicar);
