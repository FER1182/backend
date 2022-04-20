const express = require("express")
const mascotasRooutes = require("./routes/mascotas")
const personasRooutes = require("./routes/personas")

const app = express()

app.use(express.json())//formatea el objeto que viene json
app.use("/mascotas",mascotasRooutes)
app.use("/personas",personasRooutes)


app.listen(8080,()=>{
    console.log("server is ok")
})