//assing
const app = require('./config/server');


//listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});