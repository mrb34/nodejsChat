const socketio = require('socket.io');
const socketAuthorization= require('../middleware/socketAuthorization');
const io=socketio();


const socketApi={
  io
};
/*
libs
*/
const Users=require('./lib/Users')
const Rooms=require('./lib/Rooms')
const Messages=require('./lib/Messages')
/*
*Socket Authorization
*/
io.use(socketAuthorization);
/*
* Redis Adapter
*/
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({
  url: process.env.REDIS_URL

}));
//io.use(socketAuthorization)
io.on('connection',socket =>{
//console.log("a user logged in with name"+socket.request.user.lastname);
      Users.upsert(socket.id,socket.request.user);

      Users.list(users=>{
        io.emit('onlineList',users)
      });


      Rooms.list(rooms=>{
        io.emit('roomList',rooms)
      });


      socket.on('newMessage',data=>{
        const messageData={
          ...data,
          userId:socket.request.user._id,
          username:socket.request.user.firstname,
          surname:socket.request.user.lastname
        };

        Messages.upsert(messageData);
          socket.broadcast.emit('receiveMessage',messageData)
      });
      socket.on('newRoom',roomName=>{
        Rooms.upsert(roomName);
        Rooms.list(rooms=>{
          io.emit('roomList',rooms)
        });
});



socket.on('disconnect',()=>{
  console.log('disconnect');
  Users.remove(socket.request.user._id)
  Users.list(users=>{
    io.emit('onlineList',users)
  });

});

});

module.exports=socketApi;
