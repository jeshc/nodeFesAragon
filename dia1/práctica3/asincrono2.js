//asincrono2.js
var fs = require('fs');
const chalk = require('chalk');

console.log('Iniciando');
fs.readFile('loremLigerow.txt', 'utf8', function(err, contents) {
  if (err) {
    console.log(chalk.red("error"));
  } else {
    console.log('Finalizando lectura lorem ligero 1');
    console.log(chalk.blue(contents));
  }
});
fs.readFile('lorem.txt', 'utf8', function(err, contents) {
  if (err) {
    console.log(chalk.red("error"));
  } else {
    console.log('Finalizando lectura lorem pesado');
    console.log(chalk.yellow(contents));
  }
});
fs.readFile('loremLigero.txt', 'utf8', function(err, contents) {
  if (err) {
    console.log(chalk.red("error"));
  } else {
    console.log('Finalizando lectura lorem ligero 2');
    console.log(chalk.blue(contents));
  }
});
console.log('Otras actividades!!!');
console.log('Fin del programa');
