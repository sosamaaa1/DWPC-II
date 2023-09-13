var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ITGAM', author:"Gonzalez Sosa y Trejo Lopez" });
});


module.exports = router;


/* GET */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'sosa', author:"Gonzalez " });
});


module.exports = router;
