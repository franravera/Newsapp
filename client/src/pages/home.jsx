import React from 'react';
import Cards from '../components/cards'; 

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ultimas noticias</h1>
      <Cards />
    </div>
  );
}

export default Home;
