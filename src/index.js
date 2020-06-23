//assing
const express = require('express');
const app = express();
const path = require('path');
const indexRoute = require('./Routes');
const database = require('./Database');
const { format } = require('path');

//settings
app.set('port', 8000);
app.set('views', path.join(__dirname, 'Views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//database
var conn = database.conectar;
//routes
app.use(indexRoute);

//static files
app.use(express.static(path.join(__dirname, 'Public')));

//listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', conn);
});