// handlers/scienceHandler.js

const { getScienceNews } = require('../Controllers/cienciaController');

// Handler para las noticias de ciencia
const handleScienceNews = async (req, res) => {
    try {
        await getScienceNews(req, res);
    } catch (error) {
        console.error('Error handling science news request:', error);
        res.status(500).json({ error: 'Error handling science news request' });
    }
};

module.exports = { handleScienceNews };
