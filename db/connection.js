const mongoose = require ("mongoose"); 

const connection = async () => {
    try{
       await mongoose.connect("mongodb://localhost:27017/the_blog");

       console.log("Welcome to the DataBase The_Blog sponsored by node.js"); 
    }catch (error){
        console.log(error); 
        throw new Error ("No se ha podido conectar a la base de datos"); 
    }
}; 

module.exports = {
    connection
}