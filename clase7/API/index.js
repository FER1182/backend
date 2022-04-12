const express = require("express")

const app = express()

//GET

app.get("/",(req,res)=>{
    res.sendStatus(201).send("hola mundo")
})

app.get("/hola",(req,res)=>{
    res.send({message:"hola mundo"})
})

app.get("/hola/:id",(req,res)=>{
    //PARAMS
    let id =req.params.id
    console.log()
    res.send({message:"hola mundo con params"})
})

app.get("/query",(req,res)=>{
    //QUERY
    let id =req.query
    console.log(id)
    res.send({message:"hola mundo con query"})
})




app.listen(8080,()=>{
    console.log("server is run in 8080")
})