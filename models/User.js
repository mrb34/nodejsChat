const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({

    firstname:{
      type:String

    },
    lastname:{
      type:String
     },
    email:{
      type:String
    },
     username:{
       type:String

     },
    password:{
      type:String,
      minlenght:6
    },
    createdAt:{
            type: Date,
            default:Date.now
    }

  })
);

module.exports = User;
