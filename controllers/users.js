//Models
const User = require('../models/User');

//handler 
exports.post_register= (req,res,next)=>{

  let user=new User();
  user.firstname=req.body.firstname;
  user.lastname=req.body.lastname;
  user.email=req.body.email;
  user.username=req.body.username;
  user.password=req.body.password;
  user.password2=req.body.password2;

  user.save((err)=>{

  });
};

exports.get_register=(req, res, next)=>{

  res.render('register', { title: 'Register' });
};
