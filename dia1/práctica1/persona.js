var persona={"nombre":"jose","edad":12,};
console.log("Edad:"+persona.edad);

var txt=JSON.stringify(persona);
console.log(txt);
console.log('-------------');
console.log(JSON.parse(txt));
