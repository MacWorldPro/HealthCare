import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const HealthNews = () => {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  const apiKey = "bac875282df14c4687e3d5ebfbe55eb8";
  const apiEndpoint = `https://newsapi.org/v2/everything?q=health&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        const filteredNews = response.data.articles.filter(
          (article) => article.urlToImage && article.description
        );
        setNews(filteredNews);
      } catch (error) {
        console.error("Error fetching news:", error);
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
    return <div>...</div>;
  }

  const currentNews = news[currentIndex];

  return (
      <Card
        className="mt-16 py-6 px-40 hover:scale-105 hover:transition-all duration-500"
        sx={{ bgcolor: "transparent",boxShadow:"none", width: 11 / 12 }}
      >
        <CardActionArea className="hover:bg-none">
          <div className="font-bold text-2xl text-center mb-3">News</div>
          <CardMedia
            component="img"
            image={currentNews.urlToImage}
            alt={currentNews.title}
            className="rounded-md"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {currentNews.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {currentNews.description}
            </Typography>
            <a
              href={currentNews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Read more
            </a>
          </CardContent>
        </CardActionArea>
      </Card>
  );
};

export default HealthNews;
