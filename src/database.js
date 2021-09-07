const mongoose = require ('mongoose');
//creo el local host aca y como segundo parametro paso un objeto con propiedades
mongoose.connect('mongodb://localhost/notes-db-app', {
    //con estas propiedades confuiguradas asi se puede usar mongose para crear y eliminar datos facilmente
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
})   //creo una promesa
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));