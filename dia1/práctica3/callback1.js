function accionBD(string, callback){
  setTimeout(
      () => {
          console.log(string)
          callback()
        },
      Math.floor(Math.random() * 2000) + 1
    )
}


function procesarDatos(){
  console.log('Haz algo antes de SQL 1');
  accionBD("consulta sql 1", () => {
    console.log('Haz algo antes de SQL 2');
      accionBD("consulta SQL 2", () => {
        console.log('Haz algo antes de SQL 3');
          accionBD("Consulta SQL 3", () => {})
        })
        console.log('Haz algo Despues de SQl 2');
    })
    console.log('Haz algo Despues de SQL 1');
    console.log('La vida Sigue....');
}
procesarDatos()
