import { useEffect, useState } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { BlogCard } from "../blog-post/BlogCard";
import Link from "next/link";
import { Toggle } from "../utils/Toggle";

export default function BlogListingPage() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(12);
  const [isDark, setIsDark] = useState(true);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${page}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div
      data-theme={isDark ? "dark" : "light"}
      className="flex min-h-screen justify-between flex-col gap-12 items-center w-full bg-[var(--background)]"
    >
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <Header />
      <div className="flex flex-col md:gap-12 gap-6 mb-8 md:mt-[200px] mt-[132px] px-2 md:px-0">
        <p className="text-2xl leading-7 md:font-bold font-semibold font-text text-[var(--primary-text)]">
          All Blog Post
        </p>
        <div className="flex flex-col md:gap-8 gap-6">
          <div className="max-w-[1216px] flex flex-wrap md:gap-5 gap-2">
            {articles.map((article) => {
              return (
                <Link href={`blog-list/${article?.id}`}>
                  <BlogCard article={article} />
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
      </div>
      <Footer />
    </div>
  );
}
