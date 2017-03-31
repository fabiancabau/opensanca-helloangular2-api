var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Job = new Schema({
	titulo : String,
	descricao : String
});

module.exports = mongoose.model('Job', Job);
