var gis = require('chalk');

var texto = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

var j = 0;


for (j = 0; j < texto.length; j++) {
  //console.log(texto.charAt(j));
  pinta(texto.charAt(j), j % 16);
}

console.log();


function pinta(letra, index) {
  switch (index) {
    case 0:
      process.stdout.write(gis.black.bgBlackBright(letra));
      break;
    case 1:
      process.stdout.write(gis.red(letra));
      break;
    case 2:
      process.stdout.write(gis.green(letra));
      break;
    case 3:
      process.stdout.write(gis.yellow(letra));
      break;
    case 4:
      process.stdout.write(gis.blue(letra));
      break;
    case 5:
      process.stdout.write(gis.magenta(letra));
      break;
    case 6:
      process.stdout.write(gis.cyan(letra));
      break;
    case 7:
      process.stdout.write(gis.white(letra));
      break;
    case 8:
      process.stdout.write(gis.gray(letra));
      break;
    case 9:
      process.stdout.write(gis.redBright(letra));
      break;
    case 10:
      process.stdout.write(gis.yellowBright(letra));
      break;
    case 11:
      process.stdout.write(gis.blueBright(letra));
      break;
    case 12:
      process.stdout.write(gis.magentaBright(letra));
      break;
    case 13:
      process.stdout.write(gis.cyanBright(letra));
      break;
    case 14:
      process.stdout.write(gis.whiteBright(letra));
      break;
    case 15:
      process.stdout.write(gis.greenBright(letra));
      break;
    default:
      process.stdout.write(gis.red(letra));
  }
}
