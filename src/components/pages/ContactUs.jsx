import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      <div className="flex flex-col items-center gap-5">
        <div className="pt-[14px] flex flex-col">
          <div className="flex flex-col gap-5 max-w-[624px] w-full">
            <p className="text-4xl font-semibold text-[#000] font-text ">
              Contact Us
            </p>
            <p className="text text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 pb-[66px]">
          <div className="py-2.5 flex gap-[50px]">
            <div className="p-4 border border-[#E8E8EA] rounded-xl max-w-[294px] w-full flex flex-col gap-2.5">
              <p className="text-2xl leading-10 font-semibold text-[#000] font-text">
                Adress
              </p>
              <p className="text-lg font-normal leading-[26px] text-[#696A75] font-text">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="p-4 border border-[#E8E8EA] rounded-xl max-w-[294px] w-full flex flex-col gap-2.5">
              <p className="text-2xl leading-10 font-semibold text-[#000] font-text">
                Contact
              </p>
              <p className="text-lg font-normal leading-[26px] text-[#696A75] font-text">
                313-332-8662 info@email.com
              </p>
            </div>
          </div>
          <div className="pl-[35px] pr-[130px] pt-[29px] pb-[26px] flex flex-col gap-6 max-w-[638px] w-full bg-[#F6F6F7] rounded-[10px]">
            <p className="text-lg leading-[26px] font-semibold text-black font-text">
              Leave a Message
            </p>
            <div className="pb-[18px] flex flex-col gap-5">
              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="py-[5px] pl-5 pr-[14px] rounded-[5px] border border-[#DCDDDF] outline-none text-base leading-[26px] font-normal font-text text-[#97989F] w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="py-[5px] pl-5 pr-[14px] rounded-[5px] border border-[#DCDDDF] outline-none text-base leading-[26px] font-normal font-text text-[#97989F] w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="py-[5px] pl-5 pr-[14px] rounded-[5px] border border-[#DCDDDF] outline-none text-base leading-[26px] font-normal font-text text-[#97989F] w-full"
              />
              <textarea
                placeholder="Write a message"
                className="py-[14px] pl-5 pr-[14px] rounded-[5px] border border-[#DCDDDF] outline-none text-base leading-[26px] font-normal font-text text-[#97989F] w-full h-[134px]"
              ></textarea>
              <div className="flex mt-[10px]">
                <button className="px-4 py-[10px] bg-[#4B6BFB] rounded-md text-white text-sm font-medium font-text">
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
