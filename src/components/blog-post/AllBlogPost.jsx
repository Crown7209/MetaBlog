import Link from "next/link";
import { ArticleCard } from "../blog-post/ArticleCard";
import { useEffect, useState } from "react";

export const AllBlogPost = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(9);
  const [filterValue, setFilterValue] = useState("");
  const [focus, setFocus] = useState("all");

  const fetchData = () => {
    fetch(
      `https://dev.to/api/articles?per_page=${page}&tag=${filterValue}&top=10`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const handleFocus = (value) => {
    setFocus(value);
  };

  const handleFilter = (filtertag) => {
    setFilterValue(filtertag);
    setFocus(filtertag);
  };

  useEffect(() => {
    fetchData();
  }, [page, filterValue]);

  return (
    <div className="flex flex-col md:gap-8 gap-6 md:px-0 px-2">
      <div className="flex flex-col md:gap-8 gap-6">
        <div className="flex items-center justify-between">
          <p className="text-2xl leading-7 md:font-bold font-semibold text-[var(--primary-text)] font-text">
            All Blog Post
          </p>
          <Link
            href="./blog-list"
            className="text-xs leading-[25px] font-semibold font-text md:hidden text-[var(--search-icon)] hover:text-[#D4A373] duration-150"
          >
            View All
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <button
              onClick={() => handleFocus("all")}
              className={`text-xs leading-[25px] font-semibold font-text hover:text-[#D4A373] duration-150 cursor-pointer ${
                focus === "all" ? "text-[#D4A373]" : "text-[var(--search-icon)]"
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleFilter("design")}
              className={`text-xs leading-[25px] font-semibold font-text hover:text-[#D4A373] duration-150 cursor-pointer ${
                focus === "design"
                  ? "text-[#D4A373]"
                  : "text-[var(--search-icon)]"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => handleFilter("travel")}
              className={`text-xs leading-[25px] font-semibold font-text hover:text-[#D4A373] duration-150 cursor-pointer ${
                focus === "travel"
                  ? "text-[#D4A373]"
                  : "text-[var(--search-icon)]"
              }`}
            >
              Travel
            </button>
            <button
              onClick={() => handleFilter("coding")}
              className={`text-xs leading-[25px] font-semibold font-text hover:text-[#D4A373] duration-150 cursor-pointer ${
                focus === "coding"
                  ? "text-[#D4A373]"
                  : "text-[var(--search-icon)]"
              }`}
            >
              Coding
            </button>
            <button
              onClick={() => handleFilter("technology")}
              className={`text-xs leading-[25px] font-semibold font-text hover:text-[#D4A373] duration-150 cursor-pointer ${
                focus === "technology"
                  ? "text-[#D4A373]"
                  : "text-[var(--search-icon)]"
              }`}
            >
              Technology
            </button>
            <button
              onClick={() => handleFilter("ui")}
              className={`text-xs leading-[25px] font-semibold font-text hover:text-[#D4A373] duration-150 cursor-pointer ${
                focus === "ui" ? "text-[#D4A373]" : "text-[var(--search-icon)]"
              }`}
            >
              UI
            </button>
          </div>
          <Link
            href="./blog-list"
            className="text-xs leading-[25px] font-semibold font-text hidden md:block text-[var(--search-icon)] hover:text-[#D4A373] duration-150"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="max-w-[1216px] flex flex-wrap md:gap-5 gap-2">
        {articles.map((article) => {
          return (
            <Link href={`blog-list/${article?.id}`}>
              <ArticleCard article={article} />
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button
          className="px-5 py-3 border border-[var(--border)] rounded-md text-base font-medium font-text text-[var(--button-border)] hover:bg-[var(--button-hover)] duration-150"
          onClick={() => setPage(page + 6)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
