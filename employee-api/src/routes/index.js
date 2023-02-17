/**
 * arquivo: routes/index.js
 * descrição: arquivo responsável pela chamada da API na aplicação no lado do Back-End
 * data: 16/02/2023
 * autor: Daniel Brasil
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        sucesss: 'true',
        message: 'Seja bem-vindo(a) a API Node.js',
        version: '1.0.0'
    });
});

module.exports = router;