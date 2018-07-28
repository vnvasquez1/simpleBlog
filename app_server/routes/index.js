var express = require('express'),
articlesCtrl =require('../controllers/Articles'),
routes = express.Router();


routes.route('/')
  .post(articlesCtrl.postArticle)
  .get(articlesCtrl.getArticles);

routes.get('/new',articlesCtrl.createNewPage);

routes.route('/:articleId')
  .get(articlesCtrl.getArticle)
  .put(articlesCtrl.updateArticle)
  .delete(articlesCtrl.deleteArticle);

routes.get('/:articleId/edit',articlesCtrl.getEditPage);

module.exports = routes;

