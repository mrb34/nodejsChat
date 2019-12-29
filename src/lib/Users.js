
const OnlineUsers = require('../../modeldeneme/Online.js');
const User = require('../../modeldeneme/User.js');

exports.upsert=(connectionId,meta)=>{


  OnlineUsers.findOneAndUpdate({
                  metaId:meta._id,
              },
              {
                metaId:meta._id,
                connectionId:connectionId,
                meta:meta._id
              },
              {

                  upsert: true
              },
              (err) => {
                console.log(err);
                return;
              });


};
exports.remove = (_id)=> {
  OnlineUsers.remove({ metaId:_id.toString() }, function(err) {
      if (err) {
          console.log(err);
      }

  });
};

exports.list= async (callback)=>{

      const users = await OnlineUsers.find().populate("meta", "-__v").select("-__v");
     return callback(users);


}

/*******************************************************/


exports.removeAndList = async function(_id) {

  await   module.exports.remove(_id)

  return new Promise(function(resolve, reject) {
    const users = OnlineUsers.find().populate("meta", "-_id -__v").select("-__v");
    if (users) {
      resolve(users);
    } else {
      reject(Error("user not found"));
    }
  });
}



exports.upsertAndList = async function(connectionId,meta) {

  await   module.exports.upsert(connectionId,meta)

  return new Promise(function(resolve, reject) {
    const users = OnlineUsers.find().populate("meta", "-_id -__v").select("-__v");
    if (users) {
      resolve(users);
    } else {
      reject(Error("user not found"));
    }
  });
}
/************************************************************/
