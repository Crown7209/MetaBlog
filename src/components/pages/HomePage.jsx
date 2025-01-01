import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { AllBlogPost } from "../blog-post/AllBlogPost";
import { Trending } from "../trending/Trending";
import { Carousel } from "../carousel/Carousel";
import { Toggle } from "../utils/Toggle";
import { useState } from "react";

export default function HomePage() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      data-theme={isDark ? "dark" : "light"}
      className="flex flex-col md:gap-[100px] gap-[64px] items-center w-full bg-[var(--background)]"
    >
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <Header />
      <Carousel autoSlide={true} />
      <Trending />
      <AllBlogPost/>
      <Footer />
    </div>
  );
}
