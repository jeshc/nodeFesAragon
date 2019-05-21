var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, datos) {
    res.json(datos);
  });

});


router.get('/:userId', function(req, res, next) {
  User.findOne({
    'id': req.params.userId
  }, function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      res.status(200).json(datos);
    }

  });
  //res.json(req.params.userId);
});

router.post('/', function(req, res, next) {
  var usuario = User({
    id: req.body.id,
    name: req.body.name,
    lastname: req.body.lastname,
    age: req.body.age
  });
  //res.send(usuario);


  usuario.save(function(err, data) {
    if (err) {
      res.status(404).json({
        mensaje: "Error al guardar"
      });
    } else {
      res.status(201).json(data);
    }
  });

});

router.delete('/:userId', function(req, res, next) {
  User.findOneAndDelete({
    id: req.params.userId
  }, function(err, data) {
    if (err) {
      res.status(404).json(err);
    }
    res.status(201).json(data);
  });
});

module.exports = router;
