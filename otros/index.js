const express = require("express");

const app = express();

//DATA
let mensajes = [];

//SERVER
const http = require("http");
const server = http.createServer(app);

//Archivos Estaticos
app.use(express.static("public"));

//Socket
const { Server } = require("socket.io");
const io = new Server(server);

//CONECTION
io.on("connection", (socket) => {
  socket.emit("mensajes", mensajes);

  socket.on("message_client", (data) => {
    console.log(data);
  });

  socket.on("dataMsn", (data) => {
    console.log(data);
    mensajes.push(data);
    //socket.emit("mensajes", mensajes);
    io.sockets.emit("mensajes", mensajes);
  });
});

//RUTA
app.get("/chat", (req, res) => {
  res.sendFile("public/index.html", { root: "." });
});

server.listen(8080, () => {
  console.log("Server ok!!");
});
