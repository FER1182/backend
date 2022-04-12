/* const saludo =()=>{
    return "hola mundo"
}

const crearSaludo =(cb)=>{//cb es una funcion
     return cb()
} */

const decirHola=(usuario)=>{
    return "hola " + usuario

}


const decirChau=(usuario)=>{
    return "chau " + usuario

}
const crearSaludo =(usuario,cb)=>{
    return cb(usuario)
}


console.log(crearSaludo("fer",decirHola))