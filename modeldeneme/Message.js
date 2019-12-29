const mongoose = require("mongoose");

const Message = mongoose.model(
  "Message",
  new mongoose.Schema({


    roomId:{
      type:String,

      },
      data : [{
                userId : String,
                username : String,
                surname : String,
                message : String,
                when:{
                      type: Date,
                      default:Date.now
                    }

            }]
  })
);

module.exports = Message;
