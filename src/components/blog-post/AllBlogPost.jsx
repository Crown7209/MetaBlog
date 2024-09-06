import { ArticleCard } from "../blog-post/ArticleCard";
import { useEffect, useState } from "react";

export const AllBlogPost = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(9);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${page}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <p className="text-2xl leading-7 font-bold text-[#181A2A] font-text">
          All Blog Post
        </p>
        <div className="flex justify-between items-center">
          <ul className="flex gap-5 items-center">
            <li className="text-xs leading-[25px] font-semibold font-text text-[#D4A373]">
              All
            </li>
            <a
              href=""
              className="text-xs leading-[25px] font-semibold font-text text-[#495057] hover:text-[#D4A373] duration-150"
            >
              Devchallange
            </a>
            <li className="text-xs leading-[25px] font-semibold font-text text-[#495057] hover:text-[#D4A373] duration-150">
              Opensource
            </li>
            <li className="text-xs leading-[25px] font-semibold font-text text-[#495057] hover:text-[#D4A373] duration-150">
              Weeklyretro
            </li>
            <li className="text-xs leading-[25px] font-semibold font-text text-[#495057] hover:text-[#D4A373] duration-150">
              Meta
            </li>
            <li className="text-xs leading-[25px] font-semibold font-text text-[#495057] hover:text-[#D4A373] duration-150">
              Top7
            </li>
          </ul>
          <a
            href="./blog-list"
            className="text-xs leading-[25px] font-semibold font-text text-[#495057] hover:text-[#D4A373] duration-150"
          >
            View All
          </a>
        </div>
      </div>
      <div className="max-w-[1216px] flex flex-wrap gap-5">
        {articles.map((article) => {
          return (
            // <link href={`/${article.id}`}>
              <ArticleCard article={article} />
            // </link>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button
          className="px-5 py-3 border border-[rgba(105,106,117,0.30)] rounded-md text-base font-medium font-text text-[#696A75]"
          onClick={() => setPage(page + 6)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
