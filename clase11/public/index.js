console.log("hola mundo")
const socket = io()

socket.on("mensajes",(data)=>{
    console.log(data)
    render(data)
    socket.emit("message_client", "gracias por la conexion")
})

const render = (data)=>{
    let html= data.map((x)=>{
        return `
            <p> <strong> ${x.nombre} : ${x.msn}</p>
        `
    }).join(" ")

    document.querySelector("#caja").innerHTML = html;
};

const addInfo = ()=>{
    let dataObj = {
        nombre : document.querySelector("#nb").value, 
        msn : document.querySelector("#msn").value
    }
    socket.emit("dataMsn",dataObj)
    document.querySelector("#msn").value=""
    console.log(dataObj)
    return false
}