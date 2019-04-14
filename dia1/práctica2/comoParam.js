//como parametro.js
var incrementa = function(numero) {
  return numero + 1;
}

var procesar = function(x, laFuncion) {
  return laFuncion(x);
}

procesar(10, incrementa);
