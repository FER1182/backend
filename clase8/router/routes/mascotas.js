const express = require("express");
const { Router } = express;



let mascotas =[]

let router = new Router();
router.get("/getAll", (req, res) => {
  res.send({data:mascotas});
});

router.post("/create", (req, res) => {
  console.log(req.body)
  let{nombre,raza,edad}=req.body //desestructuro el objeto
  let mascotaNueva = {
    nombre,//:nombre,
    raza,//:raza,
    edad//:edad
  }//como tienen el mismo nombre lo podemos dejar solo directo

  mascotas.push(mascotaNueva);
  res.send("Mascota guardada!")

});

module.exports = router