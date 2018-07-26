var express = require('express'),
articlesCtrl=require('../controllers/Articles'),
routes = express.Router();

routes.route('/')

//routes
.post(articlesCtrl.postArticle)
//routes
.get(articlesCtrl.getArticles);

routes.get('/:articleId',articlesCtrl.getArticle);


routes.put('/:articleId',articlesCtrl.updateArticle);
routes.delete('/:articleId',articlesCtrl.deleteArticle);





module.exports = routes;

