const {connection} = require("./db/connection"); 
const express = require("express"); 
const cors = require("cors"); 



// Inicializar app
console.log("Node app running"); 

// Crear servidor Node 

const app = express(); 
const PORT = 3991

// Configurar CORS 

app.use(cors()); 

// Convertir body a objeto js

app.use(express.json()); 

// Rutas

app.get("/probando", (req, res) => {
    console.log("Se ha ejecutado el endpoint de prueba"); 
    
    return res.status(200).json({
        status: "success",
        message: "Esto es la respuesta del endpoint en formato json"
    })
})

// Crear servidor y escuchar peticiones http

app.listen(PORT , () => {
    console.log("Running at port => "+ PORT)
})

// Conectar con la base de datos
connection();