import { useRouter } from "next/router";
import { useState } from "react";

const { Footer } = require("../footer/Footer");
const { Header } = require("../header/Header");

const SinglePostPage = () => {
  const router = useRouter();
  const [article, setArticle] = useState({});
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, [article]);

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default SinglePostPage;
