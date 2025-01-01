import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toggle } from "../utils/Toggle";

const { Footer } = require("../footer/Footer");
const { Header } = require("../header/Header");

const SinglePostPage = () => {
  const router = useRouter();
  const [article, setArticle] = useState({});
  const [isDark, setIsDark] = useState(true);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, [article]);

  return (
    <div
      data-theme={isDark ? "dark" : "light"}
      className="flex flex-col md:gap-[100px] gap-[64px] items-center bg-[var(--background)]"
    >
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <Header />
      <div className="max-w-[800px] w-full flex flex-col md:gap-8 gap-6 md:mt-[200px] mt-[132px] px-4 md:px-0">
        <div className="flex flex-col md:gap-5 gap-3">
          <p className="text-[var(--primary-text)] md:text-4xl text-3xl md:leading-10 leading-8 font-semibold font-text">
            {article?.title}
          </p>
          <div className="flex gap-6">
            <div className="flex gap-2 items-center">
              <div
                style={{
                  backgroundImage: `url(${article?.user?.profile_image})`,
                  width: "28px",
                  height: "28px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                }}
              ></div>
              <p className="text-[var(--date)] text-sm font-normal font-text">
                {article?.user?.name}
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div
          className="md:h-[462px] h-[280px]"
          style={{
            background: `url(${article?.cover_image}) lightgray 50% / cover no-repeat`,
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
          }}
        ></div>
        <p className="text-[var(--single-post-text)] text-xl md:leading-8 font-normal font-source">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels.
          <br />
          <br />
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
        <div className="flex flex-col gap-4">
          <p className="text-[var(--primary-text)] text-2xl leading-7 font-medium font-text ">
            {article?.title}
          </p>
          <p className="text-[var(--single-post-text)] text-xl leading-8 font-normal font-source">
            Before embarking on your journey, take the time to research your
            destination. This includes understanding the local culture, customs,
            and laws, as well as identifying top attractions, restaurants, and
            accommodations. Doing so will help you navigate your destination
            with confidence and avoid any cultural faux pas.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
            faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
            elementum nisi quis eleifend quam adipiscing vitae. Viverra
            adipiscing at in tellus.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[var(--primary-text)] text-2xl leading-7 font-medium font-text ">
            {article.description}
          </p>
          <p className="text-[var(--single-post-text)] text-xl leading-8 font-normal font-source">
            While it's essential to leave room for spontaneity and unexpected
            adventures, having a rough itinerary can help you make the most of
            your time and budget. Identify the must-see sights and experiences
            and prioritize them according to your interests and preferences.
            This will help you avoid overscheduling and ensure that you have
            time to relax and enjoy your journey.
            <br />
            <br />
            Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
            lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
            felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePostPage;
