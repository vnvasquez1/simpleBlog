var express = require('express'),
request = require('request');

module.exports.createNewPage=function(req,res){
  res.render('new');
}


module.exports.postArticle=function(req,res){
   var requestOptions={
     url:'http://localhost:3000/api/',
     json:req.body,
     method:"POST"   } 

   request(requestOptions,function(error,response,body){
        res.redirect("/");

   });
}

module.exports.getArticles=function(req,res){
   var requestOptions={
     url:'http://localhost:3000/api/',
     json:{},
     method:"GET"   } 


   request(requestOptions,(error,response,body)=>{res.render("index",{articles:body});}
   );
}

module.exports.getArticle=function(req,res){
   var requestOptions={
     url:`http://localhost:3000/api/${req.params.articleId}`,
     json:{},
     method:"GET"   } 


   request(requestOptions,function(error,response,body){
        res.render("show",{article:body});

   });
}


module.exports.getEditPage=function(req,res){
  var requestOptions={
     url:`http://localhost:3000/api/${req.params.articleId}`,
     json:{},
     method:"GET"   } 


   request(requestOptions,function(error,response,body){
        console.log("body",body);
        res.render("edit",{article:body});

   });



}










module.exports.updateArticle=function(req,res){
   var requestOptions={
     url:`http://localhost:3000/api/${req.params.articleId}`,
     json:req.body,
     method:"PUT"   } 

   request(requestOptions,function(error,response,body){
        res.redirect(`/${body._id}`);

   });
}

module.exports.deleteArticle=function(req,res){
   console.log("deleteArticle");
   console.log("req.params.articleId",req.params.articleId);
   var requestOptions={
     url:`http://localhost:3000/api/${req.params.articleId}`,
     json:{},
     method:"DELETE"   } 


   request(requestOptions,function(error,response,body){
        res.redirect("/");

   });
}
