var router = require('express').Router();
var controller = require('../controllers/test.movie.controller')

router.route('/')
.post(controller.post)
.get(controller.get)

router.route('/:movieId')
.get(controller.getOne)

router.route('/:movieId/comment')
.post(controller.commentPost)
.get(controller.commentGet)

module.exports =router;