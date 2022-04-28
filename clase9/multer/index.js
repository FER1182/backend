const express = require("express");
const multer = require("multer");



const app=express()

let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

let upload = multer({storage})

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/", upload.single("myfile") ,(req,res)=>{//el single(se pone la referencia al input del index.html)
    console.log(req.file);
    let file =req.file
    if(!file){
       return res.status(400).send({message:"error al cargar"})
    }
    res.send({message:"el archivo se guardo con exito"});
})

app.listen(8080, ()=>{
    console.log("server OK")
})