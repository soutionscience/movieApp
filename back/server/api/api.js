var router = require('express').Router();

router.use('/users', require('./routes/userRoutes'));
router.use('/movies',require('./routes/movieRoutes'));
router.use('/auth', require('./routes/authRoutes'))

module.exports = router;