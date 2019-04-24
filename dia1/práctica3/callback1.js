function printString(string, callback){
  setTimeout(
      () => {
          console.log(string)
          callback()
        },
      Math.floor(Math.random() * 2000) + 1
    )
}


function printAll(){
  console.log('Haz algo antes de A');
  printString("A", () => {
    console.log('Haz algo antes de B');
      printString("B", () => {
        console.log('Haz algo antes de C');
          printString("C", () => {})
        })
        console.log('Haz algo Despues de B');
    })
    console.log('Haz algo Despues de A');
    console.log('La vida Sigue....');
}
printAll()
