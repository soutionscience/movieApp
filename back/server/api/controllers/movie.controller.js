var Movie = require('../models/movies.model')
var formidable = require('formidable');
var fs = require('fs');
//var _ = require('lodash');

exports.post = function(req, res, next) {
        console.log("hitting")
        var form = new formidable.IncomingForm();
        console.log("this form" + form)
        form.parse(req, function(err, fields, files) {

            var oldpath = files.req.body.url.path;
            console.log("old path" + oldpath)

            var newpath = './videos/' + files.req.url.name;
            fs.rename(oldpath, newpath, function(err) {
                if (err) throw err;
                console.log("before")
                movie = new Movie(req.body)
                console.log("after")
                movie.save(function(err, movie){
                    if(err) throw err
                        else{
                            console.log("movie saved")
                        }
                })
            })

        });
    }

        exports.get = function(req, res, next) {
            Movie.find({})
                .then(function(result) {
                        console.log(result)
                        res.json(result)

                    },
                    function(err) {
                        next(err)
                    })

        }