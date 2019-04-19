var gis= require('chalk');

var texto='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
var chalkcolors=['black','red','green','yellow','blue','magenta','cyan','white','gray','redBright','greenBright','yellowBright','blueBright','magentaBright','cyanBright','whiteBright'];

var i=0;
var j=0;

for ( i = 0; i < chalkcolors.length; i++) {
  console.log(chalkcolors[i]);
}

for (j = 0; j < texto.length; j++) {
  console.log(texto.charAt(j));
}
