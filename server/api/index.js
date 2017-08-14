const router = require('express').Router();

router.use('/api/states', require('./states'));

module.exports = router;
