const { getCarsNews } = require('../Controllers/cochesController');

// Manejador para las últimas noticias sobre coches
const handleCarsNews = async (req, res) => {
    try {
        await getCarsNews(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Error handling cars news request' });
    }
};

module.exports = { handleCarsNews };
