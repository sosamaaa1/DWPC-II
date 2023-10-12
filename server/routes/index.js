const express = require('express');

const router = express.Router();

/* GET */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'sosa',
    author: 'Gonzalez Sosa',
  });
});

module.exports = router;

/* GET */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'sosa',
    author: 'Gonzalez ',
  });
});

module.exports = router;
