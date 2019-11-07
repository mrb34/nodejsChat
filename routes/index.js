var express = require('express');
var router = express.Router();

//
router.get('*', function(req, res, next) {
res.locals.user=req.user || null;
next();
});


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});


module.exports = router;
