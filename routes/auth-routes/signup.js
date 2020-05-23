const express = require('express');
const router = express.Router();
const User = require('../../models/User.model')
const bcrypt = require('bcryptjs')

const bcryptSalt = 8;

/* GET users listing. */
router.get('/signup', (req, res, next) => {
  res.render('auth-views/signup');
});

router.post('/signup', (req, res, next) => {
  const { username, password } = req.body
  
  if (username === "", password === "") {
    res.render('auth-views/signup', {
      message: 'Please fill up with your username, it should be unique'
    });
    return;
  }
  //Find if username is unique
  
  User.findOne({
    username,
  })
  .then(user => {
    if (user !== null) {
      res.render('auth-views/signup', {
        message: "The username already exist"
      });
      return;
    }
    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPassw =  bcrypt.hashSync(password, salt)

    User.create({ username, password: hashPassw})
    .then(() => {
      res.redirect('my-calculator')
    });
})
.catch(error => console.log(error))
})

module.exports = router;