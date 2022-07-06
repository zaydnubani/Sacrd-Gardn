const router = require('express').Router();

// sends user to page given req and res
router.get('/', (req, res) => {
    res.render('flora');
});

router.get('/flora', (req, res) => {
    res.render('flora');
});

router.get('/team', (req, res) => {
    res.render('team');
});

module.exports = router;
