 const {Router} = require('express');
 const router = Router();
 const titleIndex = "FindBook";

router.get('/', (req, res) => {
    res.render('index.html', { titleIndex });
});
router.get('/categorias', (req, res) => {
    res.render('categorias.html', { titleIndex });
});
router.get('/contact', (req, res) => {
    res.render('contact.html', { titleIndex });
});
router.get('/login', (req, res) => {
    res.render('login.html', { titleIndex });
});
router.get('/support', (req, res) => {
    res.render('support.html', { titleIndex });
});
router.get('/term_cond', (req, res) => {
    res.render('term_cond.html', { titleIndex });
});

module.exports = router;