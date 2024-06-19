// routes/titularesRoutes.js
const express = require('express');
const router = express.Router();
const { handleArgentinianHeadlines } = require('../Handlers/titularesHandler');

// Ruta para obtener los principales titulares de Argentina
router.get('/argentinian-headlines', handleArgentinianHeadlines);

module.exports = router;
