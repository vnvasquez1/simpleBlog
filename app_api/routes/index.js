var express = require('express'),
articlesCtrl=require('../controllers/Articles'),
routes = express.Router();

routes.route('/')
  .post(articlesCtrl.postArticle)
  .get(articlesCtrl.getArticles);

routes.route('/:articleId')
   .get(articlesCtrl.getArticle)
   .put(articlesCtrl.updateArticle)
   .delete(articlesCtrl.deleteArticle);





module.exports = routes;

