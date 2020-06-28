//assing
const app = require('./config/server');

//routes
require('./app/Routes')(app);

//listen the server
app.listen(app.get('port'));
