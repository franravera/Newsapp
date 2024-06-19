// handlers/tecnologiaHandlers.js
const { getTechnologyNews } = require('../Controllers/tecnologiaController');

// Manejador para las últimas noticias sobre tecnología
const handleTechnologyNews = async (req, res) => {
    try {
        await getTechnologyNews(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Error handling technology news request' });
    }
};

module.exports = { handleTechnologyNews };
