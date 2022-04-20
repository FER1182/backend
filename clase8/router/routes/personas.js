const express = require("express");
const { Router } = express;

let router = new Router();
let personas =[ {"nombre": "fer", "apellido": "fer", "edad":"ff" }]

//let{nombre,apellido,edad}=personas

router.get("/getAll", (req, res) => {
  res.send(personas);
 
});

router.post("/create", (req, res) => {
  res.send("CREATE");
});

module.exports = router


