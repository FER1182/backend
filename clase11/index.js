const express = require("express")


const app = express()

//data
let mensajes=[
    {nombre:"Camilo",msn:"hola estan"},
    {nombre:"Camilo",msn:"hola bien"},
    
]


//configuracion de archivo estaticos
app.use(express.static("public"))



//server
const http = require("http")
const server = http.createServer(app)
  
//socket
const {Server} = require ("socket.io")
const io = new Server(server)

//conection
io.on("connection", (socket)=>{
    socket.emit("mensajes", mensajes);

    socket.on("message_client", (data)=>{
        console.log(data);
    });

    socket.on("dataMsn",(data)=>{
            console.log(data)
            mensajes.push(data)
            socket.emit("mensajes",mensajes);
    })
});


//rutas
app.get("/chat",(req,res)=>{
    res.sendFile("public/index.html",{root:"."})
})


server.listen(8080,()=>{
    console.log("server ok")
})