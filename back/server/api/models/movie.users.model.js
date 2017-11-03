var mongoose = require('mongoose')

module.exports = mongoose.model('MovieUser',{
	username:{

		type: String,
		required: true,
		unique:true


	},
	pwd:{
		type: String,
		required: true,

	}


})