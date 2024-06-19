// routes/scienceRoutes.js

const express = require('express');
const router = express.Router();
const { handleScienceNews } = require('../Handlers/cienciaHandler');

// Ruta para obtener las noticias de ciencia
router.get('/science-news', handleScienceNews);

module.exports = router;
