import { useEffect, useState } from "react";
import { TrendingCard } from "./TrendingCard";

export const Trending = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=4&&top=2`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <div className="flex flex-col gap-[30px] max-w-[1216px] w-full">
      <p className="text-2xl leading-7 font-bold text-[#181A2A] font-text">
        Trending
      </p>

      <div className="flex gap-5">
        <div className="w-full flex gap-6">
        {articles.map((article) => {
          return <TrendingCard article={article} />;
        })}
        </div>
      </div>
    </div>
  );
};
