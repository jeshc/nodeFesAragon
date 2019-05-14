var request = require('request');
request('https://pokeapi.co/api/v2/pokemon/pikachu/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', JSON.parse(body).abilities); // Print the HTML for the Google homepage.
  var pokemon= JSON.parse(body);
  console.log("String del objeto:", JSON.stringify(pokemon));
});