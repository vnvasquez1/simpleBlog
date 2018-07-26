var mongoose = require('mongoose');

var articleSchema=new mongoose.Schema({
  text:String,
  dateCreated:{
                type:Date,
                default:Date.now()
              }
});

module.exports =mongoose.model("Article",articleSchema);
