//assing
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//settings
app.set(app.set('port', process.env.PORT || 8000));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/Views'));
app.engine('html', require('ejs').renderFile);

//middleware
app.use(bodyParser.urlencoded({extended:false}));

//static files
app.use(express.static(path.join(__dirname,'../app/Public')));

module.exports = app;