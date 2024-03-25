const { Server } = require('socket.io')

const userSocket = {} 

exports.notificationService = function (server) {
  const ioNotification = new Server(server, {
    path: '/notification',
    cors: {
      origin: 'http://localhost:3000',
      method: ['GET', 'POST'],
    },
  });

  ioNotification.on("connection", (socket) => {
    // monitor 'send_message'
    socket.on("active", (data) => {
      userSocket[data] = socket.id
    })
    socket.on("disconnect", () => {
     
      Object.keys(userSocket).forEach((name) => {
        if (userSocket[name] === socket.id) {
          delete userSocket[name];
        }
      });
    })
  })

  return ioNotification
}

exports.sendNotification = function (name, string, ioNotification) {
  const socketId = userSocket[name]
  if (socketId) {
    ioNotification.to(socketId).emit(
      "received_notification",
      string
    )
  } 
}
