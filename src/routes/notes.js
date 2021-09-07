//requiere a express para crear rutas. El metodo Router()  me permite tener un objeto que facilite la creacion de rutas.
const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) =>{
    res.send('Notes from database');
});


module.exports = router;