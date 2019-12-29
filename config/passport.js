const LocalStrategy=require('passport-local').Strategy;
//const User=require('../models/User');
const User=require('../models/User');

const passport = require('passport');
const bcrypt = require('bcryptjs');
const config=require('../config/database');

module.exports=function(passport){
  // localStrategy
  passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'},function(email, password, done){

User.findOne({ email: email },(err, user)=> {


      if (err) throw err;
      if (!user) {
        return done(null, false,{message:'Nouser found'});
      }

      //Match Password
      bcrypt.compare(password,user.password ,(err, isMatch)=>{
        if (err) throw err;
        if (isMatch) {
            return done(null, user);
        }else {
           return done(null, false,{message:'Wrong password!'});
        }

      });

    });
  }));

  passport.serializeUser((user, done)=>{
    done(null, user.id);
  });

  passport.deserializeUser((id, done)=> {
    User.findById(id, (err, user)=> {
      done(err, user);
  });
});

};
