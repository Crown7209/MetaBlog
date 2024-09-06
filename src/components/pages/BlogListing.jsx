import { useEffect, useState } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { BlogCard } from "../blog-post/BlogCard";

export default function BlogListingPage() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(12);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${page}`)
      .then((response) => response.json())
      .then((data) => setArticles(data) )
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="flex flex-col gap-12 items-center w-full ">
      <Header />
      <div className="flex flex-col gap-12 mb-8">
        <p className="text-2xl leading-7 font-bold font-text text-[#181A2A]">
          All Blog Post
        </p>
        <div className="flex flex-col gap-8">
          <div className="max-w-[1216px] flex flex-wrap gap-5">
            {articles.map((article) => {
              return <BlogCard article={article} />;
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
      </div>
      <Footer />
    </div>
  );
}
