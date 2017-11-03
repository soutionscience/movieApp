var router = require('express').Router();
var controller = require('../controllers/movie.users.controller')

router.param('id', controller.params);


router.route('/')
    .post(controller.post)
    .get(controller.get)

router.route('/:id')
 .get(controller.findOne)
 .put(controller.put)


module.exports = router;