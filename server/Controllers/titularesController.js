// controllers/titularesControllers.js
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

// Handler para obtener los principales titulares de Argentina
const getArgentinianHeadlines = async (req, res) => {
    try {
        const response = await newsapi.v2.topHeadlines({
            country: 'ar',
            pageSize: 21 // Número de titulares a obtener (ejemplo: 10)
        });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Argentinian headlines' });
    }
};

module.exports = { getArgentinianHeadlines };

