const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');


const { messageService } = require('./messageService')
const { notificationService, sendNotification } = require('./notificationService')

const server = http.createServer(app)
app.use(cors())

messageService(server)

const ioNotification = notificationService(server)

app.get('/send_notification', (req, res) => {
  const { name, string } = req.query
  sendNotification(name, string, ioNotification)
  return res.status(200).json('ok')
})

server.listen(3001, () => {
  console.log('server is running on 3001')
})

