import { useEffect, useState } from "react";
import { LeftArrow } from "../svg/LeftArrow";
import { RightArrow } from "../svg/RightArrow";
import { CarouselCard } from "./CarouselCard";
import Link from "next/link";

export const Carousel = ({ autoSlide = false, autoSlideInterval = 5000 }) => {
  const [articles, setArticles] = useState([]);
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? articles.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === articles.length - 1 ? 0 : curr + 1));

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=5&&top=1`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-[1216px] w-full flex flex-col md:gap-[10px] gap-2 overflow-hidden relative md:mt-[200px] mt-[132px]">
      <div
        className="relative flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {articles.map((article) => {
          return (
            <Link href={`blog-list/${article?.id}`}>
              <CarouselCard article={article} />
            </Link>
          );
        })}
        <p></p>
      </div>

      <div className="flex md:gap-[10px] gap-2 justify-end px-2 md:px-0">
        <button
          onClick={prev}
          className="flex justify-center items-center md:w-10 md:h-10 w-8 h-8 rounded-md border border-[var(--button-border)] hover:bg-[var(--button-hover)] duration-100"
        >
          <LeftArrow />
        </button>
        <button
          onClick={next}
          className="flex justify-center items-center md:w-10 md:h-10 w-8 h-8 rounded-md border border-[var(--button-border)] hover:bg-[var(--button-hover)] duration-100"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};
