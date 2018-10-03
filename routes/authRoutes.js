var express = require('express');
var router = express.Router();
const passport=require('passport');

/* GET users listing. */

//auth login
router.get('/login', (req, res)=> {
  res.render('login');
});

//auth logout
router.get('/logout',(req, res)=>{
  res.send('respond with a logout');
});

//// auth with google
router.get('/google', passport.authenticate('google',{
  scope:['profile']
}));


//callback route for gogle to redirect to
router.get('/google/redirect',passport.authenticate('google'),(req, res)=>{

  ///accesing currently loggedin user
  //res.send(req.user);
  //res.send('Reached to callback');
  res.redirect('/profile/');
});


module.exports = router;
