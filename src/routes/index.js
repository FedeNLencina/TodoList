//requiere a express para crear rutas. El metodo Router()  me permite tener un objeto que facilite la creacion de rutas.
const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('Index');
});


module.exports = router;