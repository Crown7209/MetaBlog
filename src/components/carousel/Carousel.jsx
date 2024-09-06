import { useEffect, useState } from "react";
import { LeftArrow } from "../svg/LeftArrow";
import { RightArrow } from "../svg/RightArrow";
import { CarouselCard } from "./CarouselCard";

export const Carousel = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=1&&top=1`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <div className="max-w-[1216px] w-full flex flex-col gap-[10px]">
      <div className="relative">
        {articles.map((article) => {
          return <CarouselCard article={article} />;
        })}
        <p></p>
      </div>


      <div className="flex gap-[10px] justify-end">
        <button className="flex justify-center items-center w-10 h-10 rounded-md border border-[#696A75]">
          <LeftArrow />
        </button>
        <button className="flex justify-center items-center w-10 h-10 rounded-md border border-[#696A75]">
          <RightArrow />
        </button>
      </div>
    </div>
  );
};
