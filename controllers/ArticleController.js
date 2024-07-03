const Article = require ("../models/Article"); 
const {validate} = require("../services/validate"); 

// Test Controllers 

// Demo
const test = (req, res) => {
    return res.status(200).json({
        menssage: "Esto es un mensaje de prueba para chequear el funcionamiento de las ruta"
    }); 
}; 

// CREATE ARTICLE CONTROLLER
const createArticle = async (req, res) => {
    //Body params
    let newArticleParams = req.body;

    //Validate Data
    try{
        validate(res, newArticleParams); 
    }catch(error){
        return res.status(400).json({
            status: "error",
            message: "Please complete the required fields",
        }); 
    }
    //Create Object
    const article = new Article(newArticleParams);  

    //Save in DB
 
    try{
        const savedArticle = await article.save();
        
        return res.status(200).json({
            status: "success",
            article: savedArticle,
            message: "Article created and saved",
        });

    } catch (error) {
        console.error("error saving article", error);
        return res.status(400).json({
            status: "error",
            message: "Cant save the article",
        });

    }
}

module.exports = {
 test,
 createArticle,
}

