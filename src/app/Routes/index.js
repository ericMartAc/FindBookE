module.exports = app => {
    const titleIndex = "FindBook";
    app.get('/', (req, res) => {
        res.render('index.html', { titleIndex });
    });
    app.get('/categorias', (req, res) => {
        res.render('categorias.html', { titleIndex });
    });
    app.get('/contact', (req, res) => {
        res.render('contact.html', { titleIndex });
    });
    app.get('/login', (req, res) => {
        res.render('login.html', { titleIndex });
    });
    app.get('/support', (req, res) => {
        res.render('support.html', { titleIndex });
    });
    app.get('/term_cond', (req, res) => {
        res.render('term_cond.html', { titleIndex });
    });
}