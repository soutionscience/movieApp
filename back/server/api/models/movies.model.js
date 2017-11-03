var mongoose = require('mongoose')

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
	ratings:{
		type: String
		// required: true,

	}




})