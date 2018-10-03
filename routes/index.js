var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
  res.render('index', { user: req.user });
});

/* GET users listing. */


module.exports = router;
