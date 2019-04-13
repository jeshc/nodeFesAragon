//como parametro.js
var convertNum = function (num) {
return num + 10;
}
var processNum = function (num, fn) {
return fn(num);
}
processNum(10, convertNum);
