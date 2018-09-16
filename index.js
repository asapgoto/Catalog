const MongoClient = require("mongodb").MongoClient;
const url = 'mongodb://GerDer:azerty54500@ds149132.mlab.com:49132';
const dbName = 'sus_patterns'
let bodyParser = require("body-parser");

require('./models/category.js');
require('./models/pattern.js');

var express =require("express");
var mongoose=require("mongoose");
var app = express();
var nunjucks = require("nunjucks");

mongoose.connect(url + "/" + dbName);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/sources', express.static(__dirname + '/sources'));
app.use('/', require('./routes/rpattern.js'));
app.use('/css', express.static(__dirname +'/node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

nunjucks.configure('views', {
  autoescape: true,
  express   : app
});

console.log("listening on 3001");
app.listen(3001);