

let validator = require('validator');
//Models

const User = require('../models/User');

//
const validateCreateUserFields=(errors,req)=>{
  //firstname validation  error message
  if (validator.isEmpty(req.body.firstname)) {
    errors['firstname']='Firstname is required';
  }

  //Lastname validation  error message
  if (validator.isEmpty(req.body.lastname)) {
    errors['lastname']='Lastname is required';
  }

//email validation  error message
  if (!validator.isEmail(req.body.email)) {
    errors['email']='Plesae use a valid email';
  }

  //username validation  error message
  if (validator.isEmpty(req.body.username)) {
    errors['username']='Username is required';
  }

//password validation  error message
  if (!validator.isLength(req.body.password,{min:6,max:25})) {
    //errors['password']='Please ensure that your pasword has a minimum of  8 characters and maximum of 25 characters';
    errors['password']='min 8 and max 25 characters';
  }
  if (!validator.isAscii(req.body.password)) {
    errors['password']='Invalide charcters in password';
  }
  if (validator.isEmpty(req.body.password)) {
    errors['password']='Password is required';
  }
//repassword  validation  error message
  if (req.body.password!==req.body.password2) {
    errors['password2']='Please confirm pasword ';
  }


}

exports.validateRegister=(errors,req)=>{
      return new Promise((resolve,reject)=>{
                validateCreateUserFields(errors,req);

                return User.findOne({email:req.body.email}).then(u=> {
                            if (u!==null) {

                              errors['email']='Email is already in use. Please login or resset your password';
                              }
                              resolve(errors);
                            });

      });


}
