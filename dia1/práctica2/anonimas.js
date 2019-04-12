//anonimas.js
var a= function(){
  console.log(4+5);
};

var b= new Function ("x" , "y", "return x + y");

var c= new Function ("x" , "y", "z", "return x + y + z");
