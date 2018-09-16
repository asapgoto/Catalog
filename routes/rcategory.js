var router=require('express').Router();//instanciation of the router, middleware which allows us to execute
                                       //actions regarding path entered in the browser
var category=require('./../models/category.js');


router.get('/tools', (req,res) =>{
	console.log("a");
    category.find({}).then(category =>{
      res.render('./../views/index.html', {test:category}); 
    });
});


module.exports =router;