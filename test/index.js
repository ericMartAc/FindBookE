function Index(corriente) {
    //assing
    const app = require('../src/config/server');

    //routes
    require('../src/app/Routes')(app);

    //listening the server
    app.listen(app.get('port'), () => {
        console.log('Server on port: ', app.get('port'));
    });
     
}
try {
    Index();
    console.log("testeo terminado");
} catch (error) {
    console.log("testeo falló, error: ",error)
};

setInterval(() => {
    process.exit()
}, 15000);