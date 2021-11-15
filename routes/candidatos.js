const { Router } = require('express');

const router = Router();

const { 
        candidatosGet, 
        candidatosPost, 
        candidatosGetBySKU, 
        candidatosPut, 
        candidatosDelete
    } = require('../controllers/candidatos')

router.get('/', candidatosGet);

router.post('/', candidatosPost);

router.get('/:sku', candidatosGetBySKU);

router.put('/:sku', candidatosPut);

router.delete(':sku', candidatosDelete);

module.exports = router;