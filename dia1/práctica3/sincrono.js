var fs = require('fs');
console.log('Iniciando lectura');
var contents = fs.readFileSync('loremLigero.txt', 'utf8');
console.log('Finalizando lectura');
console.log(contents);

console.log('Fin del programa');
