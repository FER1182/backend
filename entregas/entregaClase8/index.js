const express = require("express")
const productosRoutes = require("./routes/productos")

const app = express()

app.use(express.json())//formatea el objeto que viene json

app.use("/productos",productosRoutes)

const Contenedor = require("./contenedor.js")
let archivo = new Contenedor("text.json")

app.get("/", async (req,res)=>{
    let data = await archivo.getAll()
    console.log(data)
    res.json(data)
})


app.listen(8080,()=>{
    console.log("server is ok")
})