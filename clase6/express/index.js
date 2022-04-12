const express = require("express")
const path =require("path")
const Contenedor =require("./contenedor")
const nombreArchivo = "productos.json";

let archivos = new Contenedor(nombreArchivo);


const app = express()//asi creo el servidor

let counter=0
const PORT = process.env.PORT || 8080//esto es para el servidor remoto

app.get("/", (req,res)=>{
        res.send("hola mundo")
})

app.get("/productos", (req,res)=>{
    //res.sendFile(path.join(__dirname+"/index.html"))//en el dir name llega a la carpeta que contiene el index.js
    res.send(archivos.getAll())

});

app.get("/visitas", (req,res)=>{
    counter++
    res.send({visitas:counter})
})

app.get("/obj", (req,res)=>{
    res.json({message:"hola mundo"})
})

app.listen(8080,()=>{
    console.log("server run on port 8080")
})
/* //puerto para el servidor de la nube
app.listen(8080,()=>{
    console.log("server run on port 8080")
}) */