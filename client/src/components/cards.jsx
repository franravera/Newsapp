import React, { useState, useEffect } from 'react';
import axios from "../../axios-config";
import { Card, Button } from 'flowbite-react';

function Cards() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('/titulares/argentinian-headlines')
      .then(response => {
        console.log('Data:', response.data);
        setNews(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleReadMore = (url) => {
    window.open(url, '_blank'); // Abre la URL en una nueva pestaña del navegador
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {news.map((article, index) => (
        <Card key={index} className="flex flex-col h-full">
          <div className="flex-grow">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
              {article.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              {article.description}
            </p>
          </div>
          <Button
            className="mt-auto bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => handleReadMore(article.url)}
          >
            Leer más
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
