import { useState } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Toggle } from "../utils/Toggle";
import Link from "next/link";

export default function ErrorPage() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div
      data-theme={isDark ? "dark" : "light"}
      className="flex flex-col items-center justify-between w-full h-screen bg-[var(--background)]"
    >
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <Header />
      <div className="w-full md:h-[100px] h-[68px]"></div>
      <div className="flex flex-col md:flex-row max-w-[642px] w-full py-[10px] md:gap-[58px] gap-8 items-center px-2 md:px-0">
        <p className="text-[var(--primary-text)] text-7xl leading-[72px] font-normal font-text ">
          404
        </p>
        <div className="w-[2px] h-[156px] bg-[var(--border)] hidden md:block"></div>
        <div className="flex flex-col md:gap-5 gap-3 py-2">
          <p className="text-2xl leading-10 font-semibold font-text text-[var(--primary-text)] text-center md:text-start">
            Page Not Found
          </p>
          <p className="text-lg leading-[26px] font-normal font-text text-[var(--button-border)] text-center md:text-start">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/"
              className="px-4 py-[10px] rounded-md bg-[#4B6BFB] hover:bg-[#607dff] text-white text-sm font-medium font-text"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
