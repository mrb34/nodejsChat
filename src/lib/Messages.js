const _ = require('lodash');
const Messages = require('../../models/Message.js');

exports.upsert=({roomId,message,userId,username,surname})=>{

    const data={
                  userId : userId,
                  username : username,
                  surname : surname,
                  message : message
                }

  Messages.findOneAndUpdate({
                  roomId:roomId,
              },
              {
                  roomId:roomId,
                  "$push": { "data": data }

              },
              {
                  upsert: true
              },
              (err) => {
                console.log(err);
                return;
              });


};

exports.list=(roomId,callback)=>{

  Messages.find({roomId:roomId},(err,messages)=>{
    if (err) {
      console.log(err);
      return callback([]);
    }else {
    //
  let messageList=[]

    if (typeof messages !== 'undefined' && messages.length > 0) {

        if (messages[0].data !=null) {
            messageList=messages[0].data;
          }
        }
        return callback(_.orderBy(messageList,'when','asc'));
    }

  });

};
