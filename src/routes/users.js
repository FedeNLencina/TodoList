//requiere a express para crear rutas. El metodo Router()  me permite tener un objeto que facilite la creacion de rutas.
const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) =>{
    res.send('Ingresando a la app');
});


router.get('/users/signup', (req, res) =>{
    res.send('Fromulario de authenticathion');
});
module.exports = router;