const knex = require("knex")({
    client: "mysql",
    connection : {
        host:"127.0.0.1",//o 127.0.0.1 localhost
        port: 3306,
        user: "root",
        password: "",
        database: "camiloDataBase",
    },
    pool: {min: 2, max : 8 }//para ordenar la concurrencia y que no colapse
});

knex.schema.createTableIfNotExists("users",function(table){
    table.increments("id").primary()
    table.string("name"),
    table.string("email",128),
    table.string("password")
})
.then(()=>{
    console.log("conexion y tabla creada")
})
.catch((err)=>{
    console.log(err)
})

module.exports = knex 

