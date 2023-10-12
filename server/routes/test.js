const express = require('express');

const router1 = express.Router();

/* GET /about */
router1.get('/', (req, res, next) => {
  res.send('imagen aleatoria');
});

/* GET /about/tec */
router1.get('/tec', (_, res) => {
  res.render('author', {
    author: 'Gonzalez Sosa',
  });
});

module.exports = router1;
