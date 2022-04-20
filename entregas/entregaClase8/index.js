const express = require("express")
const productosRoutes = require("./routes/productos")

const app = express()

app.use(express.json())//formatea el objeto que viene json

app.use("/productos",productosRoutes)


app.listen(8080,()=>{
    console.log("server is ok")
})