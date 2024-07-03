const Article = require("../models/Article");
const { validate } = require("../services/validate");

// Test Controllers

// Demo
const test = (req, res) => {
  return res.status(200).json({
    menssage:
      "Esto es un mensaje de prueba para chequear el funcionamiento de las ruta",
  });
};

// CREATE ARTICLE CONTROLLER
const createArticle = async (req, res) => {
  //Body params
  let newArticleParams = req.body;

  //Validate Data
  try {
    validate(res, newArticleParams);
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Please complete the required fields",
    });
  }
  //Create Object
  const article = new Article(newArticleParams);

  //Save in DB

  try {
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
};

// GET ALL ARTICLES CONTROLLER 

const getAllArticles = async (req, res) => {
    try{
        let allArticleslist = await Article.find({}).exec();
        
        if(!allArticleslist || allArticleslist.lenght === 0) {
            return res.status(404).json({
                status: "error",
                message: "Cant show all articles list",
            })
        }
        return res.status(200).json({
            status: "success",
            message: "All articles list => ",
            articles: allArticleslist,
        })
    }catch(error) {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        })

    }
}

module.exports = {
  test,
  createArticle,
  getAllArticles,
};
