const express = require('express');
const router = express.Router();

router.get('/my-calculator', (req, res, next) => {
    res.render('my-calculator')
})