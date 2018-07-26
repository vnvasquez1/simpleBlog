var Article = require('../models/Article');
var mongoose =require('mongoose');

mongoose.connect("mongodb://localhost/simpleBlogDB");
module.exports.postArticle=function(req,res){
  console.log("req.body",req.body);
  Article
    .create(req.body,function(err,result){
       if(err){
          console.err(err);
       }else{
          res.json(result);
       } 
    });

}

module.exports.getArticles=function(req,res){
  Article
    .find({},function(err,results){
       if(err){
          console.err(err);
       }else{
          res.json(results);
       } 
    });

}

module.exports.getArticle=function(req,res){
  Article
    .findById(req.params.articleId,function(err,result){
       if(err){
         console.log("err",err);
       }else{
         res.json(result);
       }
    });
}


module.exports.updateArticle=function(req,res){
  Article
    .findByIdAndUpdate(req.params.articleId,req.body,function(err,result){
       if(err){
         console.log(err);
       }else{
         res.json(result);
       }
    });
}


module.exports.deleteArticle=function(req,res){
  Article
    .findByIdAndRemove(req.params.articleId,function(err,result){
       if(err){
         console.log(err);
       }else{
         res.json(result);
       }
    });
}
