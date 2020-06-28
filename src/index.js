//assing
const app = require('./config/server');

//routes
require('./app/Routes')(app);

//listening the server
app.listen(app.get('port'));
