var mongoose= require('mongoose');

var categorySchema=new mongoose.Schema({
    name:String,
    value:String,
    bonsoir:String, 
    game:String
}, {collection: 'category'});

var category=mongoose.model('categorys',categorySchema);
module.exports=category;