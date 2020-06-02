var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>Hola express users</h1> <h2> cab 2</h2>');
});

module.exports = router;
