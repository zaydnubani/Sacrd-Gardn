const router = require('express').Router();

// sends user to page given req and res
router.get('/', (req, res) => {
    res.render('landing');
});

router.get('/flora', (req, res) => {
    res.render('flora');
});

router.get('/team', (req, res) => {
    res.render('team');
});

router.get('/faq', (req, res) => {
    res.render('faq');
});

router.get('/roadmap', (req, res) => {
    res.render('roadmap');
});

module.exports = router;
