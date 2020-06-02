var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jesus' , carrera:'ICO',
    actions:[
              {accion: "abrir"},
              {accion:"Cerrar"},
              {accion:"No hacer nada"},
              {accion:"dormir"}
            ]
  });
});

router.get('/hola',(req,res,next)=>{
  res.render('home',{ saludo:"Hola mundo express Handle bars" })
});

module.exports = router;
