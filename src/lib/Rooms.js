const Rooms = require('../../models/Room.js');

exports.upsert=(name)=>{

  Rooms.findOneAndUpdate({
                  name:name,
              },
              {
                  name:name
              },
              {
                  upsert: true
              },
              (err) => {
                console.log(err);
                return;
              });


};




exports.list=(callback)=>{

  Rooms.find({},(err,rooms)=>{
    if (err) {
      console.log(err);
      return callback([]);
    }else {

          let roomList=[];
          roomList=JSON.stringify(rooms)

      return callback(JSON.parse(roomList));
    }

  });

};


/***********************/
exports.upsertAndList = async function(name) {

  await   module.exports.upsert(name)

  return new Promise(function(resolve, reject) {
    const rooms = Rooms.find().select("-__v");
    if (rooms) {
      resolve(rooms);
    } else {
      reject(Error("rooms not found"));
    }
  });
}
/*********************************/
