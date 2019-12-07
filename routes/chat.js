var express = require('express');
var router = express.Router();
let users=require('../controllers/usersController')
//



/* GET chat page. */

router.get('/',users.checkAuthentication, function(req, res, next) {
  
  res.render('chat', { title: 'Chat' ,user:req.user});
});



module.exports = router;
