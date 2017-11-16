var User= require ('./models/movie.users.model');
 var jwt = require('jsonwebtoken');


 exports.getToken = function(user){
 	return jwt.sign(user, 'chipo')

 }

 exports.ordinaryUser = function(req, res, next){

 	var token = req.body.token || req.query.token || req.body.headers['my-token']

 	if(token){
 		jwt.verify(token, 'chipo', function(err, decoded){
 			if(err){
 				var err = new Error("you are not authenticated")
 				next(err)
 			}
 			else{
 				req.decoded= decoded
 				next();
 			}
 		})
 	}
 	else{
 		var err = new Error("no token provided")
 		err.status = 403;
         return next(err);
 	}
 }