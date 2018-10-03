var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
  //res.render('profile');
  res.send('Logged In with Profile '+req.user.username);
});

/* GET users listing. */


module.exports = router;
