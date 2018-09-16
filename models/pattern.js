var mongoose= require('mongoose');

var patternSchema=new mongoose.Schema({
    name:String,
    timescope:[{type: String}],
    repeat:String,
    outcomes:[{type: String}],
    metrics:[{type: String}],
    description:String,
    examples:[{type: String}],
    impacts:String,
    problematics:[{type: String}],
    additional_components:[{type: String}],
    addition_percentage:[{type: String}],
    levelofconfidence:String
}, {collection: 'pattern'});

var pattern=mongoose.model('pattern',patternSchema);

module.exports=pattern;