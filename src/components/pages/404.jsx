import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-between w-full h-screen">
      <Header />
      <div className="flex max-w-[642px] w-full py-[10px] gap-[58px] items-center">
        <p className="text-black text-7xl leading-[72px] font-normal font-text ">
          404
        </p>
        <div className="w-[2px] h-[156px] bg-[#E8E8EA]"></div>
        <div className="flex flex-col gap-5 py-2">
          <p className="text-2xl leading-10 font-semibold font-text text-black">
            Page Not Found
          </p>
          <p className="text-lg leading-[26px] font-normal font-text text-[#696A75]">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <div className="flex">
            <a href="./" className="px-4 py-[10px] rounded-md bg-[#4B6BFB] text-white text-sm font-medium font-text">Back To Home</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
