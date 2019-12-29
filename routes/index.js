var express = require('express');
var router = express.Router();
let users=require('../controllers/usersController')
//
router.get('*', function(req, res, next) {
res.locals.user=req.user || null;
next();
});


/* GET home page. */

router.get('/',users.checkAuthentication, function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
