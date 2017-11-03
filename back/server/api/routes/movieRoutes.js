var router = require('express').Router();
var controller = require('../controllers/movie.controller')

router.route('/')
.post(controller.post)
.get(controller.get)

module.exports =router;