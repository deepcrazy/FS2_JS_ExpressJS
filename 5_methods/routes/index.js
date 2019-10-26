var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const myName = "abc";
  res.render('index', { data: myName });
});

module.exports = router;
