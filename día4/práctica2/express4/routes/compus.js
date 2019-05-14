var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Computadora= require('../models/computers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Computadora.find({},function(err,datos){
    res.json(datos);
  });

});

/* nueva computadora*/
router.post('/', function(req, res, next) {
  console.log(req.body);
  var compu=  Computadora({
    id: req.body.id,
    marca:req.body.marca,
    modelo:req.body.modelo
  });

  compu.save(function(err,data){
    if (err) {
      res.send('error');
    }else {
      res.send(data);
    }
  });

});

module.exports = router;
