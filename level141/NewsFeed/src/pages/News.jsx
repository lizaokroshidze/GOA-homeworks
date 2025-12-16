import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

function News({ country, category, articles, setArticles}) {
  const FetchAllNews = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );

      setArticles(res.data.articles);
      console.log(res.data.articles)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchAllNews();
  }, []);

  return (
    <div className="bg-gray-200 dark:bg-gray-800 py-24 px-4 md:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-7">
            {
                articles.map((article, index)=>{
                    return <NewsCard key={index} article={article}/>
                })
            }
        </div>
    </div>
  );
}

export default News;
