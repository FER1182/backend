//const express = require("express")  //commonjs
import express from "express" // es module // es6 //es5
import colorRandom from "./colors"

const app = express()

const suma = (a,b)=>{
    return a + b
}//ES6

const resta = (a,b)=>{
    return a - b
}//ES6
const multiplica = (a,b)=>{
    return a * b
}//ES6
const div = (a,b)=>{
    return a / b
}//ES6
//


/* console.log(suma(2,8))
console.log(resta(10,8))
console.log(multiplica(10,8))
console.log(div(10,2))
 */


setInterval(()=>{
    console.log(colorRandom())
},1000)

app.listen(8080,()=>{
    console.log("server ok")
})
