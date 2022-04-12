 const http = require("http")
const moment = require("moment")



const server = http.createServer((req,res)=>{
        console.log(req.url)

        if(req.url==="/"){
            res.end("hola este es el path principal")
        }

        if(req.url==="/productos"){
            res.end("hola este es el path PRODUCTOS")
        }

        if(req.url==="/hora"){
            let start= moment().format("HH:mm")
            res.end("hola la hora es:" + start)
        }


    //req.url
})

server.listen(8080,()=>{
    console.log("servidor http escuchando en el puerto 8080")
})
 
//localhost 8080
