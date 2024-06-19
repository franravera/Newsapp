const { getHealthNews } = require("../Controllers/saludController")

// Manejador para las últimas noticias sobre coches
const handleHealthNews = async (req, res) => {
    try {
        await getHealthNews(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Error handling cars news request' });
    }
};

module.exports = { handleHealthNews };
