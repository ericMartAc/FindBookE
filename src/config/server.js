//assing
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

//settings
app.set(app.set('port', process.env.PORT || 8050));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/Views'));
app.engine('html', require('ejs').renderFile);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//routes
app.use(require('../app/Routes'));

//static files
app.use(express.static(path.join(__dirname,'../app/Public')));

//no encontrado
app.use((req,res,next)=>{
    res.send('no found by findbook');
})

module.exports = app;