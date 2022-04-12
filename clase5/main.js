const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]
//ejercicio 1
const obtenerNombres= productos.map(x => {
    return x.nombre
})

console.log(obtenerNombres.join(","))
//punto b
let suma=0;
productos.map(x=>{
    return suma+=x.precio
})
console.log(suma.toFixed(2))