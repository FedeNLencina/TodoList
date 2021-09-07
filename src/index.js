//llamo a todos los modulos con el metodo requiere
const express = require ('express');
const path = requiere('path');
const exphbs =requiere('express-handlebars');
const methodOverride = requiere('method-override');
const expressSession = requiere('express-session');


//Initializations
const app = express();

//Settings (iran configuraciones)
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(_dirname, 'views'));

//configuro handelbars
app.engine('.hbs', exphbs({
    //aca van propiedades para saber de que manera se utilizan las vistas
    defalltLayout:'main',
    layoutsDir:path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    //esto sirve para decir la extension de todos los archivos dentro de esta carpeta
    extname:'.hbs'
}));

//Con esto configuro el motor de las vistas el cual es .hbs
app.set('view engine', '.hbs');

//Middlewares (donde iran funciones que se ejecutaran antes de llegar al servidor)
//Utilizo un metodo de express el cual cuando un formulario quiera enviar un dato determinado, pueda entenderlo
//Con extended false, aseguro que sean solo los datos.
app.use(express.urlencoded({extended : false}));

//Configuro el method-override. Esto es para que los formularios manden muchos metodos como put y delete.
app.use(methodOverride('_method'));

//
app.use(expressSession({
    //se inicializan estos valores por defecto
    secret: 'mySecretApp',
    resave: true,
    saveUninitialized: true
}))
//Global Variables (ciertos datos accesibles para la app)


//Routes



//Static Files



//Server is listening 
app.listen(app.get('port'), () => {
    console.log ('Server on port', app.get('port'));
});