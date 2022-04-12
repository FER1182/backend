const fs = require("fs")


fs.readFile("./test.txt","utf-8",(err,data)=>{
    if(err){
        return "error en la lectura"
    }else{
      console.log(data)
    }
})


fs.writeFile("./test.txt","contenido nuevo async","utf-8", (err)=>{
    if(err){
        return "error al escribir"
    }else{
        console.log("se escribio correctamente")
    }
})