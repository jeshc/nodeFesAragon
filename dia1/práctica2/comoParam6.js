//comoParam6.js
var calculadora = function (x , y, funcion) {
return funcion(x,y);
}

//suma
calculadora(10,20, (x,y) => {
  return x+y;
});

//resta
calculadora(10,20, (x,y) => {
  return x-y;
});
