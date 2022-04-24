const express = require("express");
const { Router } = express;
const Contenedor = require("./contenedor");
const multer = require("multer");

let router = new Router();
let archivo = new Contenedor("text.json");

router.get("/", async(req, res) => {
  let data = await archivo.getAll();
  res.json(data);
  //res.send(productos);
});

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

let upload = multer({ storage });

router.post("/", (req, res) => {
    
    let newProduct = {
        name: req.body.name,
        price: req.body.price,
        img: req.body.thumbnail
    }
    console.log(req.body.name)
    console.log(newProduct)
    let idProductoAgregado = archivo.save(newProduct)
    console.log(idProductoAgregado)
    res.send(`El archivo se guardo correctamente y el id del nuevo productos es ${idProductoAgregado}`)
});


router.get("/:id", async(req, res) => {
  let data = await archivo.getById(req.params.id);
  res.json(data);
  //res.send(productos);
});



module.exports = router


