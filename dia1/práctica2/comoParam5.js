//como parametro.js
var suma = function (x , y) {
return x + y;
}

var resta = function (x , y) {
return x - y;
}

var calculadora = function (x , y, funcion) {
return funcion(x,y);
}
calculadora(10, 20, suma);
calculadora(10, 20, resta);
calculadora(calculadora(10, 20, suma),calculadora(10, 20, resta),suma);
