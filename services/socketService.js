const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
var cors = require('cors')

app.use(cors({
    origin: '*' // Replace with the origin(s) you want to allow
  }));
const server = require("http").createServer();


// const io = require("socket.io")(server);

const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    },
  });

io.on("connection", (socket) => {
  // ...
  console.log(socket.id)
  socket.emit("start", "world");

  socket.on("ping", (arg) => {
    console.log('ping')
    socket.broadcast.emit("pingres", "pingxxx");
    // console.log(arg); // world
  });

  socket.on("call", (arg) => {
    console.log('call'); // world
    socket.broadcast.emit("call", arg);
  });

  socket.on("call2", (arg) => {
    console.log("call2"); // world
    socket.broadcast.emit("call2", arg);
  });
});


server.listen(8002, function(){
    console.log("socket on port 8002")
});
