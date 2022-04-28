const express = require("express")
const {engine} = require("express-handlebars")

const app=express();

app.set("view engine","hbs")
app.set("views","./views")

app.engine(
    "hbs",
    engine({
    extname:".hbs",
    defaultLayout:"main.hbs",
    partialsDir:__dirname+"/views/partials" //estos son los componentes

}))

//app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index",{titulo:"hola mundo con HBS"})//render busca la carpeta views  ..sendfile busca en public
})

app.listen(8080,()=>{
    console.log("server OK")
})