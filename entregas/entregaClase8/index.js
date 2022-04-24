const express = require("express");
const productosRoutes = require("./api/productos");

const app = express();

app.use(express.json()); //formatea el objeto que viene json

app.use("/static", express.static("public"));
app.use("/api/productos",productosRoutes);





app.listen(8080, () => {
  console.log("server is ok");
});
