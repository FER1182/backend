class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;


    }
    getFullname() {
        return `${this.nombre} ${this.apellido} `
    }
    addMascota(mascotaNueva){
        this.mascotas.push(mascotaNueva)
    }
    conutMascotas(){
        return this.mascotas.length
    }
    addBook(nombre,autor){
        this.libros.push({nombre:nombre,autor:autor})
    }
    getBooksNames(){
        return this.libros.map((lib)=> lib.nombre);
    }

}

let nombreUsuario = "fernando";
let apellidoUsuario = "rudnevich";

let libros = [{
        nombre: "el sr de los anillos",
        autor: "juan del"
    },
    {
        nombre: "el sr rinon",
        autor: "juper"
    }
]

let mascotas=["willy","sura"];

let usuario1 = new Usuario(nombreUsuario, apellidoUsuario, libros, mascotas);

console.log(usuario1.getFullname());
usuario1.addMascota("flopy")
console.log(mascotas);
console.log(usuario1.conutMascotas());
usuario1.addBook("codigo davici","juan de los palotes")
console.log(usuario1.getBooksNames());
