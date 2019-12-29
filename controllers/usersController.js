
//Models

const User = require('../modeldeneme/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {isEmpty} = require('lodash');
require('../config/passport');
//handler
const{validateRegister}=require('../validators/registerUserValidate');


exports.get_register=(req, res, next)=>{

  res.render('register', { title: 'Register' });
};

exports.post_register= (req,res,next)=>{

  const firstname=req.body.firstname;
  const lastname=req.body.lastname;
  const email=req.body.email;
  const username=req.body.username;
  const password=req.body.password;
  const password2=req.body.password2;


  let  errors={};
  return validateRegister(errors,req).then(errors=>{
        if (!isEmpty(errors)) {
            console.log(errors);
            res.render('register',{
                  title:'Register',
                  errors:errors,
                  firstname:firstname,
                  lastname:lastname,
                  email:email,
                  username:username,
                  password:password,
                  password2:password2
                });

              }else {
                      let newUser=new User({
                        firstname:firstname,
                        lastname:lastname,
                        email:email,
                        username:username,
                        password:password

                      });
                bcrypt.genSalt(10,(err,salt)=>{

                          bcrypt.hash(newUser.password,salt,(err,hash)=>{

                            if (err) {
                              console.log(err);
                            }

                            newUser.password=hash;

                            newUser.save((err)=>{
                              if (err) {
                                console.log(err);
                                return;

                              }else {
                                req.flash('success','user Added');
                                res.redirect('/users/login');
                              }
                            });
                          });
                      });
              }
            })
}

exports.get_login=(req, res, next)=>{

  res.render('login', { title: 'Login' });
};

exports.post_login=(req, res, next)=>{
    passport.authenticate('local', { successRedirect: '/chat',
                                    failureRedirect: '/users/login',
                                    successFlash:'Welcome',
                                    failureFlash: true })(req,res,next);


};

exports.get_logout=(req,res,next)=>{
  req.logout();
  req.flash('success','you are logged out');
  res.redirect('/users/login');

};

exports.get_user=(req, res, next) =>{
  res.json(req.user)
};

exports.checkAuthentication=(req,res,next)=>{

  if (req.isAuthenticated()) {
    return next();
  }else {
    req.flash('danger','Please Login');
    res.redirect('../users/login');
  }
}
