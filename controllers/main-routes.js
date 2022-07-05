const router = require('express').Router();

// sends user to page given req and res
router.get('/', (req, res) => {
    res.render('landing');
});

module.exports = router;
