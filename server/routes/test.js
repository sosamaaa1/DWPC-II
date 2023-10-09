var express = require('express');
var router1 =
  express.Router();

/* GET /about */
router1.get(
  '/',
  function (
    req,
    res,
    next,
  ) {
    res.send(
      'imagen aleatoria',
    );
  },
);

/* GET /about/tec */
router1.get(
  '/tec',
  function (
    _,
    res,
  ) {
    res.render(
      'author',
      {
        author:
          'Gonzalez Sosa',
      },
    );
  },
);

module.exports =
  router1;
