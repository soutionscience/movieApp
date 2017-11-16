var User = require('../models/movie.users.model')
var _ = require('lodash');


exports.params = function(req, res, next, id) {
    User.findById(id)
        .then(function(user) {
            if (!user) {
                next(new Error('No user with that id'));
            } else {
                req.user = user;
                next();
            }
        }, function(err) {
            next(err);
        });
};


exports.post = function(req, res, next) {
    user = new User(req.body)
    user.save(function(err, user){
      if (err) throw err;
      var name = user.username;
      res.json(user)
      res.end("added "+ name)
    })
  
}

exports.get = function(req, res, next) {

    User.find({})
        .then(function(users) {
            res.json(users)
            console.log(users)
        }, function(err) {
            next(err)
        })

}

exports.findOne = function(req, res, next){

	var user = req.user;
	console.log("Are we hitting this?")
	res.json(req.user)

}
exports.put = function(req, res, next) {
  var user = req.user;

  var update = req.body;

  _.merge(user, update);

  user.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};