const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/signup', (req, res, next) => {
  res.render('auth-views/signup', console.log('Hello'));
});

module.exports = router;