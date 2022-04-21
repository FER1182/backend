const express = require("express");
const { Router } = express;

let router = new Router();
let productos =[ ]

//let{nombre,apellido,edad}=personas




 router.get("/", (req, res) => {
  res.send(productos);
});

router.post("/", (req, res) => {
  console.log(req.body)
});

module.exports = router


