const express = require("express");
const multer = require("");
const { application } = require("express");




let upload =  multer(Storage);

app.get("/",upload.single("myfile"),(req,res)=>{
    console.log(req.file);
    let file = req.file
    if(!file){
        return res.status(400).send({message:"error al cargar la imagen"})
    }
})


