var Movie = require('../models/movies.model')
var passport = require('passport')
var formidable = require('formidable');
var fs = require('fs');


exports.post = function(req, res ,next){

	var movie = new Movie (req.body)
	movie.save(function(err, movie){
		if(err) throw err;
		var title = req.body.title
		res.end("added :"+ title+ " the movie")
	})

}

exports.get = function(req, res, next){
	Movie.find({}, function(err, movie){
		if (err) {throw err}
			res.json(movie);
		next()
		})
}

exports.getOne = function(req, res, next){
console.log("hitting")
Movie.findById(req.params.movieId, function(err, movie){
	if (err){
		// throw new Error("no dish with that id")
		res.end("no dish with that id")
	}
	res.json(movie)

})
}

 exports.commentPost = function(req, res, next){
Movie.findById(req.params.movieId, function(err, movie){
	if (err){
		// throw new Error("no dish with that id")
		res.end("no dish with that id")
	}
	movie.comments.push(req.body)
	movie.save(function(err, movie){
		if (err) {throw err}
			res.end("comments saved")
	});

})

 }

 exports.commentGet = function(req, res, next){
 	Movie.findById(req.params.movieId, function(err, movie){
 		if (err) { throw err}
 			res.json(movie.comments)
 	})

 }

 