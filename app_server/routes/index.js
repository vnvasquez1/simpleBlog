var express = require('express'),
articlesCtrl =require('../controllers/Articles'),
routes = express.Router();

routes.post('/',articlesCtrl.postArticle);
routes.get('/new',articlesCtrl.createNewPage);
routes.get('/',articlesCtrl.getArticles);

module.exports = routes;

