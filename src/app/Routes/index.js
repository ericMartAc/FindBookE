const {Router} = require('express');
const router = Router();
const fs = require('fs');
const uuid = require('uuid');
const titleIndex = "FindBook";
var estadoSesion = 0;
var Datos = [];
var json_consult = "";
var consult = "";

try {
    const json_Datos = fs.readFileSync('config/code/JSON/personas.json', 'utf-8');
    Datos = JSON.parse(json_Datos);
} catch (error) {
    
}

router.get('/', (req, res) => {
    res.render('index', { titleIndex, estadoSesion, Datos });
});
router.get('/register', (req, res) => {
    res.render('register', { titleIndex, estadoSesion, Datos });
});
router.post('/register', (req, res) => {
    try {
        var { nombre, email, dpto, categ, psw, psw_conf } = req.body;
  
        if (!nombre || !email || !dpto || !categ || !psw || !psw_conf) {
        res.status(400).send("404 no found by FindookE");
        return;
        }
    
        var newDato = {
        id: uuid.v4(),
        nombre,
        email,
        dpto,
        categ,
        psw,
        psw_conf
        };
    
        Datos.push(newDato);
    
        // saving the array in a file
        const json_Datos = JSON.stringify(Datos);
        fs.writeFileSync('config/code/JSON/personas.json', json_Datos, 'utf-8');        
    } catch (error) {
        console.log("error: ",error); 
    }  
    res.redirect('/');
});
router.get('/categorias', (req, res) => {
    res.render('categorias', { titleIndex, estadoSesion, Datos });
});
router.get('/contact', (req, res) => {
    res.render('contact', { titleIndex, estadoSesion, Datos });
});
router.get('/colaborators', (req, res) => {
    res.render('colaborators', { titleIndex, estadoSesion, Datos });
});

module.exports = router;