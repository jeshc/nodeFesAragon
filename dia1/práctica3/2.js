
// cd code/
// node 2.js

var fs = require('fs')
var myNumber = undefined // we dont know what the number is yet since it is stored in a file

function addOne() {
  fs.readFile('./number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++

    console.log(myNumber) // logs out undefined
  })
}

addOne()

console.log(myNumber) // logs out undefined
