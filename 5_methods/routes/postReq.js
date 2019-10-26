var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
//   const myName = "abc";
//   res.render('index', { data: myName });

res.send("This is a POST request..!!");
});

module.exports = router;