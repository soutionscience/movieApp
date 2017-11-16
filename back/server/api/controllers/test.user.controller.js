var User = require('../models/movie.users.model')
var passport= require('passport')

exports.post =function(req, res){
	console.log("register")

//     User.register(new User({ username : req.body.username }),
//       req.body.password, function(err, user) {
//       	console.log("password")
//       	console.log(req.body.password)
//         if (err) {
//             return res.status(500).json({err: err});
//         }
//         if(req.body.firstname){
//           user.firstname =req.body.firstname;
//         }
//         if(req.body.lastname){
//           user.lastname= req.body.lastname;
//         }
//         user.save(function(err,user){
//         passport.authenticate('local')(req, res, function () {
//             return res.status(200).json({status: 'Registration Successful!'});
//         });
//     });
// });
   var user = new User(req.body)
   user.save(function(err, user){
   	if(err) throw err;
   	res.json(user).status({status:"user saved"})
   })



}

exports.get =  function(req, res){
	res.end("get is working")
}