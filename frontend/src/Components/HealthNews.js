import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HealthNews = () => {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const apiKey = 'bac875282df14c4687e3d5ebfbe55eb8';
  const apiEndpoint = `https://newsapi.org/v2/everything?q=health&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        const filteredNews = response.data.articles.filter(
          article => article.urlToImage && article.description
        );
        setNews(filteredNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [apiEndpoint]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 60000);

    return () => clearInterval(intervalId);
  }, [news.length]);

  if (news.length === 0) {
    return <div>Loading...</div>;
  }

  const currentNews = news[currentIndex];

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
      <div className="w-full flex flex-col md:flex-row items-center mb-4">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img className="w-full rounded-lg" src={currentNews.urlToImage} alt="News" />
        </div>
        <div className="w-full md:w-1/2 md:pl-6">
          <h2 className="text-2xl font-bold mb-2">{currentNews.title}</h2>
          <p className="mb-4">{currentNews.description}</p>
          <a href={currentNews.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default HealthNews;
