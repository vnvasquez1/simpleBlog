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

console.log("req.body",req.body);
   request(requestOptions,function(error,response,body){
        console.log("body",body);
        res.redirect("/");

   });
}

module.exports.getArticles=function(req,res){
   var requestOptions={
     url:'http://localhost:3000/api/',
     json:{},
     method:"GET"   } 


   request(requestOptions,function(error,response,body){
        console.log("body",body);
        res.render("index",{articles:body});

   });
}
