import { useState } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Toggle } from "../utils/Toggle";

export default function ContactUsPage() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div
      data-theme={isDark ? "dark" : "light"}
      className="flex flex-col md:gap-[100px] gap-8 bg-[var(--background)]"
    >
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <Header />
      <div className="flex flex-col items-center gap-5 md:mt-[200px] mt-[132px] px-2 md:px-0">
        <div className="pt-[14px] flex flex-col">
          <div className="flex flex-col gap-5 md:max-w-[624px] max-w-[410.38px] w-full ">
            <p className="md:text-4xl text-3xl font-semibold text-[var(--primary-text)] font-text ">
              Contact Us
            </p>
            <p className="text text-[var(--button-border)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-8 pb-[66px]">
          <div className="py-2.5 flex flex-col md:flex-row md:gap-[50px] gap-4">
            <div className="p-4 border border-[var(--border)] rounded-xl md:max-w-[294px] w-full flex flex-col gap-2.5">
              <p className="text-2xl leading-10 font-semibold text-[var(--primary-text)] font-text">
                Adress
              </p>
              <p className="text-lg font-normal leading-[26px] text-[var(--button-border)] font-text">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="p-4 border border-[var(--border)] rounded-xl md:max-w-[294px] w-full flex flex-col gap-2.5">
              <p className="text-2xl leading-10 font-semibold text-[var(--primary-text)] font-text">
                Contact
              </p>
              <p className="text-lg font-normal leading-[26px] text-[var(--button-border)] font-text">
                313-332-8662 info@email.com
              </p>
            </div>
          </div>
          <div className="md:pl-[35px] md:pr-[130px] md:pt-[29px] md:pb-[26px] p-6 flex flex-col gap-6 max-w-[638px] w-full bg-[var(--footer-background)] rounded-[10px]">
            <p className="text-lg leading-[26px] font-semibold text-[var(--primary-text)] font-text">
              Leave a Message
            </p>
            <div className="pb-[18px] flex flex-col md:gap-5 gap-3">
              <div className="flex flex-col md:flex-row md:gap-5 gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="py-[5px] pl-5 pr-[14px] rounded-[5px] border border-[var(--border)] bg-[var(--input)] outline-none text-base leading-[26px] font-normal font-text text-[#97989F] w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="py-[5px] pl-5 pr-[14px] rounded-[5px] border border-[var(--border)] bg-[var(--input)] outline-none text-base leading-[26px] font-normal font-text text-[#97989F] w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="py-[5px] pl-5 pr-[14px] rounded-[5px] border border-[var(--border)] bg-[var(--input)] outline-none text-base leading-[26px] font-normal font-text text-[#97989F] w-full"
              />
              <textarea
                placeholder="Write a message"
                className="py-[14px] pl-5 pr-[14px] rounded-[5px] border border-[var(--border)] bg-[var(--input)] outline-none text-base leading-[26px] font-normal font-text text-[#97989F] w-full h-[134px]"
              ></textarea>
              <div className="md:flex md:mt-[10px]">
                <button className="px-4 w-full md:w-auto py-[10px] bg-[#4B6BFB] hover:bg-[#607dff] rounded-md text-white text-sm font-medium font-text">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
