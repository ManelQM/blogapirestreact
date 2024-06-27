const {connection} = require("./db/connection"); 
const express = require("express"); 



// Inicializar app
console.log("Node app running"); 

// Conectar con la base de datos
connection(); 

// Crear servidor Node 

const app = express(); 

// Configurar CORS 

app.use(cors()); 