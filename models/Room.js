const mongoose = require("mongoose");

const Room = mongoose.model(
  "Room",
  new mongoose.Schema({

      name:{
        type:String
      },
      when:{
            type: Date,
            default:Date.now
          }


  })
);

module.exports = Room;
