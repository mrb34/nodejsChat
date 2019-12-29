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


// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Login' });
// });

// router.get('/getUser',users.checkAuthentication, function(req, res, next) {
//   res.json(req.user)
// });


module.exports = router;
