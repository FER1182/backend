const {
    deepStrictEqual
} = require("assert")
const fs = require("fs")


try {
        let readFile = fs.readFileSync("./test.txt", {encoding: "utf-8"})
        console.log(readFile)
    } catch (err) {
        console.log("error de lectura")
}

try {
    fs.unlinkSync("test.txt")
    console.log("archivo eliminado")
} catch (error) {
    console.log("error al borrar el archivo")
}


//fs.writeFileSync("./test.txt", "nuevo comentario dentrooo del txt", {encoding: "utf-8"})



let obj = [{
        noma: "camilo",
        lastName: "lidarte",
    },
    {
        noma: "camilo",
        lastName: "lidarte",
    },
    {
        noma: "camilo",
        lastName: "lidarte",
    },
]