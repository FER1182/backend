const fs = require ("fs")

/* 
fs.promises.readFile("./test.txt","utf-8")
.then((data)=>{
    try {
        console.log(data)
    } catch{
        console.log("err")
    }
}).catch((err)=>{
    throw "sdgsdf"
}) */

//asyn /await

const save = async ()=>{
    try {
        let read = await fs.promises.readFile("./test.txt","utf-8")
        console.log(read)
    } catch (error) {
        console.log("erro al leer")        
    }
}

save()


