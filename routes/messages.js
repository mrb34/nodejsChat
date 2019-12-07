var express = require('express');
var router = express.Router();
let users=require('../controllers/usersController')

//lib
const Messages= require('../src/lib/Messages');

/* GET home page. */

router.get('/list',users.checkAuthentication, (req, res, next)=> {
  Messages.list(req.query.roomId,messages=>{
      res.json(messages);
  })

});


module.exports = router;
