var express = require('express'),
articlesCtrl =require('../controllers/Articles'),
routes = express.Router();


routes.post('/',articlesCtrl.postArticle);
routes.get('/new',articlesCtrl.createNewPage);
routes.get('/',articlesCtrl.getArticles);
routes.get('/:articleId',articlesCtrl.getArticle);

routes.get('/:articleId/edit',articlesCtrl.getEditPage);

routes.put('/:articleId',articlesCtrl.updateArticle);
routes.delete('/:articleId',articlesCtrl.deleteArticle);

module.exports = routes;

