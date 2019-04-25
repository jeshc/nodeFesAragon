// index.js -> código original de la página oficial de reuqes en npmjs.com
var request = require('request');
request('https://pokeapi.co/api/v2/pokemon/pikachu/', function(error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  var resp = JSON.parse(body);
  console.log('movimientos:' +JSON.stringify(resp.abilities)  );
});
