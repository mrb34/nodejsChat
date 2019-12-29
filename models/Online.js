const mongoose = require("mongoose");

const OnlineUser = mongoose.model(
  "OnlineUser",
  new mongoose.Schema({

    metaId:{
      type:mongoose.Schema.Types.ObjectID,

      },

      connectionId:{
        type:String
      },

     meta:{
       type: mongoose.Schema.Types.ObjectId,
       ref: "User"

   },

      when:{
            type: Date,
            default:Date.now
          }


  })
);

module.exports = OnlineUser;
