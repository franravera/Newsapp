// routes/tecnologiaRoutes.js
const express = require('express');
const router = express.Router();
const { handleTechnologyNews } = require('../Handlers/tecnologiaHandler');

// Ruta para obtener las últimas noticias sobre tecnología
router.get('/technology-news', handleTechnologyNews);

module.exports = router;
