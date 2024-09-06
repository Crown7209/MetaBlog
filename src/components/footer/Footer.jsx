import Link from "next/link";
import { FacebookIcon } from "../svg/FacebookIcon";
import { InstagramIcon } from "../svg/InstagramIcon";
import { TwitterIcon } from "../svg/TwitterIcon";
import { LinkedinIcon } from "../svg/LinkedinIcon";
import { BlogLogo } from "../svg/BlogLogo";

export const Footer = () => {
  return (
    <footer className="w-full py-16 flex justify-center bg-[#F6F6F7] border-t border-[#E8E8EA]">
      <div className="max-w-[1216px] w-full flex flex-col gap-[25px] ">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6 max-w-[280px] w-full">
            <div className="flex flex-col gap-3">
              <p className="text-[#181A2A] text-lg font-semibold font-jakarta">
                About
              </p>
              <p className="text-[#696A75] text-base font-normal font-jakarta">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="text-[#3B3C4A] text-base font-normal font-jakarta">
                <span className="text-[#181A2A] text-base font-semibold font-jakarta">
                  Email :
                </span>{" "}
                info@jstemplate.net
              </p>
              <p className="text-[#3B3C4A] text-base font-normal font-jakarta">
                <span className="text-[#181A2A] text-base font-semibold font-jakarta">
                  Phone :
                </span>{" "}
                880 123 456 789
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="./"
              className="text-base font-normal text-[#3B3C4A] font-jakarta"
            >
              Home
            </a>
            <a
              href="./blog-list"
              className="text-base font-normal text-[#3B3C4A] font-jakarta"
            >
              Blog
            </a>
            <a
              href="./contact-us"
              className="text-base font-normal text-[#3B3C4A] font-jakarta"
            >
              Contact
            </a>
          </div>

          <div className="max-w-[280px] w-full flex justify-end gap-[26.67px]">
            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://x.com">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
            <a href="https://mn.linkedin.com/">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div className="py-5 flex justify-between items-center border-t border-[#DCDDDF]">
          <div className="flex items-center gap-[10px]">
            <BlogLogo />
            <div className="flex flex-col gap-[2px]">
              <p className="text-xl font-normal font-jakarta text-[#141624]">
                Meta <span className="font-extrabold">Blog</span>
              </p>
              <p className="text text-[#3B3C4A]">
                © All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <a
              href=""
              className="text text-[#3B3C4A]"
            >
              Terms of Use
            </a>
            <div className="h-6 w-[1px] bg-[#E8E8EA]"></div>
            <a
              href=""
              className="text text-[#3B3C4A]"
            >
              Privacy Policy
            </a>
            <div className="h-6 w-[1px] bg-[#E8E8EA]"></div>
            <a
              href=""
              className="text text-[#3B3C4A]"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
