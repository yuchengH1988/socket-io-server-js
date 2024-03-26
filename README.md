# socket.io sever node.js

This is a simple project with Node.js, Express, and socket.IO that enables users to communicate in real-time through a web interface.

## Features

- Real-time messaging between clients in different rooms
- call an API for sending notification to a user who sets up a name.

### Message service

for front-ent

```js
// 1. To connect socket.io under router 'http://localhost3001/message'
// 2. emit "join_room"
socket.emit("join_room", room)
// 3. emit sent "send_message"
socket.emit("send_message", { message, room })
// 4. received message
socket.on("received_message", (data) => {
  setMessageReceived(data.message)
})
```

### Notification service

for front-ent

```js

// 1. To connect socket.io under router 'http://localhost3001/notification'

// 2. active your name to notification
socketNotification.emit("active", name)

// 3. received message
socketNotification.on("received_notification", (data) => {
  setNotification(data)
})

// 4.open api to sent your message
// http://localhost3001/send_notification?name=xxxxx&string=xxxxx
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before you begin, ensure you have Node.js and npm (Node.js package manager) installed on your system. You can check their installation by running:

node --version
npm --version

### Installing

Follow these steps to install and set up the project locally:

1. Clone the repository

   ```bash
   git clone https://github.com/yuchengH1988/socket-io-server-js
   ```

2. Navigate into the project directory

   ```bash
   cd project-name
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the server

   ```bash
   npm run dev
   ```

   This will launch the server on `localhost:3001`.

## Authors

- **Calvin Huang** - [GitHub](https://github.com/yuchengH1988)
  