var express = require('express');
var router = express.Router();
var userModel = require('./users');
const { use } = require('../app');
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/register', function(req, res, next) {
  res.render('register');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/register', function(req, res, next) {
  const user = new userModel({
    username:req.body.username,
    contact:req.body.contact,
    email:req.body.email,
  })
  userModel.register(user,req.body.password)
  .then(function(){
    passport.authenticate("local")(req,res,function(){
      res.redirect("/")
    })
  })
});





module.exports = router;
