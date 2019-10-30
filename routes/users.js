const express = require('express');
const router = express.Router();

//Models

const User = require('../models/User');


router.get('/register', function(req, res, next) {

  res.render('register', { title: 'Register' });
});



router.post('/register',(req,res,next)=>{

  let user=new User();
  user.firstname=req.body.firstname;
  user.lastname=req.body.lastname;
  user.email=req.body.email;
  user.username=req.body.username;
  user.password=req.body.password;
  user.password2=req.body.password2;

  user.save((err,data)=>{

    if (err) {
      console.log(err);
      res.json(err);
    }else {
        res.json(data);
    }

  });

});

module.exports = router;
