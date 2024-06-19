const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

const getCarsNews = async (req, res) => {
    try {
        const response = await newsapi.v2.everything({
            q: 'coches OR automóviles OR vehículos', // Palabras clave relacionadas con coches en español
            language: 'es', // Idioma español
            pageSize: 21,
        });

        if (response.totalResults === 0) {
            return res.status(404).json({ error: 'No se encontraron noticias sobre coches' });
        }

        res.json(response);
    } catch (error) {
        console.error('Error fetching cars news:', error);
        res.status(500).json({ error: 'Error fetching cars news' });
    }
};

module.exports = { getCarsNews };
