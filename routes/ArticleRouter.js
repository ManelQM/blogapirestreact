const express = require("express");
const router = express.Router();
const multer = require("multer");
const ArticleController = require("../controllers/ArticleController");

const imageStorage = multer.diskStorage({
  // Configuramos Multer
  // Dos metodos de multer
  // con cb indicamos donde está el directorio
  destination: function (req, file, cb) {
    cb(null, "./img/articles");
  },

  filename: function (req, file, cb) {
    cb(null, "article" + Date.now() + file.originalname);
  },
});

const uploads = multer({ storage: imageStorage });

router.get("/demoroute", ArticleController.test);
router.post("/createarticle", ArticleController.createArticle);
router.get("/getallarticles", ArticleController.getAllArticles);
router.get("/getonearticle/:id", ArticleController.getOneArticle);
router.delete("/deletearticle/:id", ArticleController.deleteArticle);
router.put("/updatearticle/:id", ArticleController.updateArticle);
router.post("/uploadimg/:id", [uploads.single("file0")], ArticleController.uplodadImage); 
module.exports = router;
