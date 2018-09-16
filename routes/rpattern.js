var router=require('express').Router();//instanciation of the router, middleware which allows us to execute
                                       //actions regarding path entered in the browser
var pattern=require('./../models/pattern.js');
var category=require('./../models/category.js');

var mongoose= require('mongoose');
var conn = mongoose.connection;

router.get('/', (req,res) =>{	
  
	res.render('./../views/home.html');
    //err => res.status(500).send(err);    
});

// Faute de mieux, on va handle le leftmenu ici
router.get('/howto', (req, res) =>{
	res.render('./../views/howto.html');
});

router.get('/list', (req, res) =>{
	pattern.find({}).then(pattern =>{
    	category.find({}).then(category =>{
    		res.render('./../views/list.html', {pattern:pattern, category:category}); 
    	});
    });
});



router.get('/admin', (req, res) =>{
	
	category.find({}).then(category =>{
		res.render('./../views/admin.html', { category:category}); 
	});
});
router.post('/admin', (req, res) =>{
	console.log(req.body);
	var newPattern = {
		name : req.body.name,
		timescope : req.body.timescope,
		repeat : req.body.repeat,
		outcomes : req.body.outcomes,
		metrics : req.body.metrics,
		description : req.body.description,
		examples : req.body.examples,
		impacts : req.body.impacts,
		problematics : req.body.problematics,
		additional_components : req.body.additionalcomponents,
		addition_percentage : req.body.additionalpercent,
		levelofconfidence : req.body.levelofconfidence
	};

	conn.collection('pattern').insert(newPattern);

	pattern.find({}).then(pattern =>{
    	category.find({}).then(category =>{
    		res.render('./../views/admin.html', {pattern:pattern, category:category}); 
    	});
    });
});





module.exports =router;