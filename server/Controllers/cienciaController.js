
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

// Handler para obtener las últimas noticias de ciencia en español
const getScienceNews = async (req, res) => {
    try {
        const response = await newsapi.v2.topHeadlines({
            category: 'science',
            
            pageSize: 21 // Número de noticias a obtener
        });
        res.json(response);
    } catch (error) {
        console.error('Error fetching science news:', error);
        res.status(500).json({ error: 'Error fetching science news' });
    }
};

module.exports = { getScienceNews };
