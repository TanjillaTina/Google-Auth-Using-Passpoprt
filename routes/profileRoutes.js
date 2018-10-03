var express = require('express');
var router = express.Router();

//this fun is to check if,someone is logged-in in the page, if yes, redirect to profile page, else redirect to login page
//middleware function, that's gonna set in before profile page is redirected
const authCheck=(req,res,next)=>{
   if(!req.user){
     //if user isn't logged in 
     res.redirect('/auth/login');

   }
   else{
     //if logged in
    next();
   }
};


router.get('/',authCheck, (req, res)=> {
  //res.render('profile');
  res.send('Logged In with Profile '+req.user.username);
});

/* GET users listing. */


module.exports = router;
