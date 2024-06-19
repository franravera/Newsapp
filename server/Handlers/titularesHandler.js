// handlers/titularesHandlers.js
const { getArgentinianHeadlines } = require('../Controllers/titularesController');

// Manejador para los principales titulares de Argentina
const handleArgentinianHeadlines = async (req, res) => {
    try {
        await getArgentinianHeadlines(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Error handling Argentinian headlines request' });
    }
};

module.exports = { handleArgentinianHeadlines };
