const fs = require("fs")

// const nombreArchivo= “productos.txt”

const encodingFile= "utf-8"

// producto={

// title: “nombre del producto”,

// price: 12,

// thumbnail: “url de la img”
	

// }

class Contenedor{

    constructor(fileName){

        this.fileName= fileName
    }


    save(obj){

        try{

            let isJSON= this.getAll()

                if(typeof isJSON == "object"){

                    isJSON.length > 0 ? obj.id= isJSON[isJSON.length -1].id +1 : obj.id= 1

                    isJSON.push(obj)

                    fs.writeFileSync( `./${this.fileName}`, JSON.stringify(isJSON))

            return obj.id
        }else{

                obj.id=1

                fs.writeFileSync( `./${this.fileName}`, JSON.stringify([obj]))

                return obj.id
            }

        }

        catch(e){

        console.log(e)

        }
}

getById(id){

    try{

        const allInfo = this.getAll()

            if(typeof allInfo == "object"){

                if(typeof id === "number" && id <= allInfo.length && id > 0 ) return allInfo.find(el=> el.id === id)

            return `El id: ${id} es inválido.`

            }else{

                return `No existe el archivo ${this.fileName}.`
            }

        }

    catch(e){

    return e
    }
}

getAll(){

// devuelve un array con los obj presentes en el archivo

    if (fs.existsSync(`./${this.fileName}`)){

        let info = fs.readFileSync( `./${this.fileName}`, encodingFile)

        let isJSON = JSON.parse(info)

        return isJSON

        }else{

            return `No existe el archivo ${this.fileName}`
        }

}



deleteById(id){

// // Elimina del archivo el objeto con el id buscado

    const allInfo = this.getAll()

        if(typeof allInfo == "object"){

        if(typeof id === "number" && id <= allInfo.length && id > 0 ) {

            const newInfo= allInfo.filter(el=> el.id !==id)

            if(newInfo.length < allInfo.length){

        fs.writeFileSync( `./${this.fileName}`, JSON.stringify(newInfo))

        return `El Id ${id} fue eliminado`

        }

        return `El Id ${id} ya fue eliminado`

        }else{

            return `El Id ${id} es inválido`
        }
    }else return allInfo

}

deleteAll(){

// Elimina todos los objetos presentes en el archivo.

fs.writeFileSync( `./${this.fileName}`, JSON.stringify([]))

return `Todos los objetos del archivo ‘${this.fileName}’ fueron eliminados`

}

}
let archivos = new Contenedor("productos.json");
archivos.deleteById(2);
/* archivos.save({
    title: "juan",
    price: 1200,
    thumbnail: "sgsdfsdg",
  }); */
//module.exports= Contenedor