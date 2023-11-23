import express from 'express';

const router = express.Router();

// GET /
router.get('/', (req, res) => {
  res.render('index', { title: 'ITGAM', author: 'Ivan Rivalcoba' });
});

export default router;
