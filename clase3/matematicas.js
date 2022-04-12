const sumar =(a,b )=>{
    return a+b
}

const restar =(a,b )=>{
    return a-b
}
const multiplicar =(a,b )=>{
    return a*b
}

const dividir =(a,b )=>{
    return a/b
}

const operacion =(a,b,cb)=>{
    return cb(a,b)
}

console.log(operacion(5,4,sumar))