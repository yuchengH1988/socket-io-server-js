const { Server } = require('socket.io')

exports.messageService = function (server) {
  const io = new Server(server, {
    path: '/message',
    cors: {
      origin: 'http://localhost:3000',
      method: ['GET', 'POST'],
    },
  });

  io.on("connection", (socket) => {
    socket.on("join_room", (data) => {
      socket.join(data)
    })
    // monitor 'send_message'
    socket.on("send_message", (data) => {
      socket.to(data.room).emit("received_message", data)
    })
  })
}
