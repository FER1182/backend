const express = require("express");
const productosRoutes = require("./routes/productos");

const app = express();

app.use(express.json()); //formatea el objeto que viene json

//app.use("/productos",productosRoutes)

const Contenedor = require("./contenedor.js");
let archivo = new Contenedor("text.json");

app.get("/productos", async (req, res) => {
  let data = await archivo.getAll();
  res.json(data);
});

app.get("/productos/:id", async (req, res) => {
  let data = await archivo.getById(req.params.id);
  res.json(data);
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.listen(8080, () => {
  console.log("server is ok");
});
