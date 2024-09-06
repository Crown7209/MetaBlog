import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { AllBlogPost } from "../blog-post/AllBlogPost";
import { Trending } from "../trending/Trending";
import { Carousel } from "../carousel/Carousel";

export default function HomePage() {

  return (
    <div className="flex flex-col gap-[100px] items-center w-full">
      <Header />
      <Carousel />
      <Trending />
      <AllBlogPost />
      <Footer />
    </div>
  );
}