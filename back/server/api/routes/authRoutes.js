var router = require('express').Router();
var controller = require('../controllers/movie.users.controller')

router.route('/register')
.post(controller.post)

module.exports = router;