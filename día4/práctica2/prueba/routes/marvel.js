var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Marvel = require('../models/marvel');

router.get('/comic',(req,res,next)=>{
  Marvel.find({},(err, datos)=>{
    if(err) res.status(500).json({error:"Error en la consulta"});
    if(datos) res.status(200).json(datos);
  });
} );

router.get('/comic/:idComic',(req,res,next)=>{
  Marvel.findOne(
    {'id' : req.params.idComic},
    (err,datos)=>{
      if( datos == null){
        res.status(404).json({mensaje:"No existe!"});
      }else{
        res.status(200).json(datos);
      }
    }
  );
});

router.post('/comic',(req,res,next)=>{
  var comic = Marvel(
    {
      id:req.body.id,
      nombre:req.body.nombre,
      poder:req.body.poder,
      alias:req.body.alias,
      conCapa:req.body.conCapa,
      imagen:req.body.imagen,
      villano:req.body.villano
    }
  );
  comic.save( (err,datos)=>{
    if(err){
      res.status(404).json({
        mensaje:"Error al guardar"
      });
    }else{
      res.status(201).json(datos);
    }
  } );
});

module.exports = router;
