var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var comments = new Schema({
	description: String,
	ratings:{
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Movies4',{
	title:{

		type: String,
		
		unique:true


	}
	,
	url:{
		type: String
		// required: true,

	},
	description:{
		type: String
		// required: true,

	},
	comments:[comments]




})