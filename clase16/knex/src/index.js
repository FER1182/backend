const express = require ("express")
const knex = require("./db")

const app = express()
app.use(express.json())
//CREAR USER
app.post("/",(req,res)=>{
    console.log(req.body);
    let objNew = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }
    knex("users").insert(objNew).then(()=>{
        console.log("register ok!!")
        res.send({message:"register ok!!"})
    }).catch(err=>{
        console.log(err)
    })
})
//OBTENER UN USER USER
app.get("/user/:id",(req,res)=>{
    knex.from("users").select("*").where({id :req.params.id})//esto devuelve promesa
    .then((json)=>{
        res.send({data:json})
    })
    .catch(err=>{
        console.log(err)
    })
})


//OBTENER TODOS LOS USER

app.get("/all",(req,res)=>{
    knex.from("users").select("*")//esto devuelve promesa
    .then((json)=>{
        res.send({data:json})
    })
    .catch(err=>{
        console.log(err)
    })
})


//actualiza USER
app.put("/updataUser/:id",(req,res)=>{
    knex("users")
    .where({id:req.params.id})
    .update({name:req.body.name, email:req.body.email})
    .then(()=>{
        res.send({data : "user update"})
    })
    .catch(err=>{
        console.log(err)
    })

})


//BORRAR USER
app.delete("/deleteUser/:id",(req,res)=>{
    knex("users")
    .where({id: req.params.id})
    .del()
    .then(()=>{
        res.send({data : "user delete"})
    })
    .catch(err=>{
        console.log(err)
    })



})


app.listen(8080, ()=>{
    console.log("server ok")
})