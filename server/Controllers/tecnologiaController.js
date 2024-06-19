// controllers/tecnologiaController.js
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

// Handler para obtener las últimas noticias de tecnología
const getTechnologyNews = async (req, res) => {
    try {
        const response = await newsapi.v2.topHeadlines({
            category: 'technology',
            language: 'es', // Idioma español
            pageSize: 21 // Número de titulares a obtener (ejemplo: 21)
        });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching technology news' });
    }
};

module.exports = { getTechnologyNews };
