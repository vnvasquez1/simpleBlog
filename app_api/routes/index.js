var express = require('express'),
articlesCtrl=require('../controllers/Articles'),
routes = express.Router();


routes.post('/',articlesCtrl.postArticle);
routes.get('/',articlesCtrl.getArticles);

module.exports = routes;

