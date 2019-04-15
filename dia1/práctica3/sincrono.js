// https://datos.gob.mx/busca/dataset/coleccion-nacional-de-insectos
var fs = require('fs');
console.log('Iniciando lectura');
var contents = fs.readFileSync('lorem.txt', 'utf8');
console.log('Finalizando lectura');
console.log(contents);

console.log('Fin del programa');
