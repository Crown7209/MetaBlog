import { useEffect, useState } from "react";
import { TrendingCard } from "./TrendingCard";
import Link from "next/link";

export const Trending = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=4&&top=2`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col md:gap-[30px] gap-6 max-w-[1216px] w-full md:px-0 px-2">
      <p className="text-2xl leading-7 md:font-bold font-semibold text-[var(--primary-text)] font-text">
        Trending
      </p>

      <div className="flex gap-5 overflow-scroll md:overflow-auto">
        <div className="w-full flex md:gap-6 gap-2">
          {articles.map((article) => {
            return (
              <Link href={`blog-list/${article?.id}`}>
                <TrendingCard article={article} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
