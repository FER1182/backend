function obtenerMayor(x, y) {
    if (x % 1 == 0 && y % 1 == 0) {
        if (x > y) {
            return "x es el mayor"
        }else{
            return "y es mayor"
        }
    }
}
function obtenerMayorProfe(x,y){
    if(typeof x === "number" && typeof y === "number"  ){
        if(x == y ){
            return x
        }else if(x>y){
            return x
        }else if (y > x){
            return y
        }
    }
    return "los numeros no son validos"
}

console.log(obtenerMayorProfe(4,5))