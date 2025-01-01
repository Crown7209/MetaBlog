import Link from "next/link";
import { FacebookIcon } from "../svg/FacebookIcon";
import { InstagramIcon } from "../svg/InstagramIcon";
import { TwitterIcon } from "../svg/TwitterIcon";
import { LinkedinIcon } from "../svg/LinkedinIcon";
import { BlogLogo } from "../svg/BlogLogo";

export const Footer = () => {
  return (
    <footer className="w-full md:py-16 py-8 md:px-0 px-4 flex justify-center bg-[var(--footer-background)] border-t border-[var(--border)]">
      <div className="max-w-[1216px] w-full flex flex-col gap-[25px] ">
        <div className="md:flex md:flex-row md:justify-between flex flex-col items-center md:items-start gap-6 md:gap-0">
          <div className="flex flex-col md:gap-6 gap-3 max-w-[280px] w-full">
            <div className="flex flex-col gap-3 text-center md:text-start">
              <p className="text-[var(--primary-text)] text-lg font-semibold font-jakarta">
                About
              </p>
              <p className="text-[var(--button-border)] text-base font-normal font-jakarta">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="flex flex-col gap-1 text-center md:text-start">
              <p className="text-[var(--button-border)] text-base font-normal font-jakarta">
                <span className="text-[var(--primary-text)] text-base font-semibold font-jakarta">
                  Email :
                </span>{" "}
                info@jstemplate.net
              </p>
              <p className="text-[var(--button-border)] text-base font-normal font-jakarta">
                <span className="text-[var(--primary-text)] text-base font-semibold font-jakarta">
                  Phone :
                </span>{" "}
                880 123 456 789
              </p>
            </div>
          </div>

          <div className="flex md:flex-col gap-4">
            <Link
              href="/"
              className="text-base font-normal text-[var(--button-border)] font-jakarta relative before:absolute before:bottom-[-4px] before:h-[3px] before:bg-[#D4A373] before:left-0 before:w-[0%] before:duration-300 before:hover:w-full hover:text-[var(--arrow)]"
            >
              Home
            </Link>
            <Link
              href="/blog-list"
              className="text-base font-normal text-[var(--button-border)] font-jakarta relative before:absolute before:bottom-[-4px] before:h-[3px] before:bg-[#D4A373] before:left-0 before:w-[0%] before:duration-300 before:hover:w-full hover:text-[var(--arrow)]"
            >
              Blog
            </Link>
            <Link
              href="/contact-us"
              className="text-base font-normal text-[var(--button-border)] font-jakarta relative before:absolute before:bottom-[-4px] before:h-[3px] before:bg-[#D4A373] before:left-0 before:w-[0%] before:duration-300 before:hover:w-full hover:text-[var(--arrow)]"
            >
              Contact
            </Link>
          </div>

          <div className="max-w-[280px] w-full flex md:justify-end justify-center gap-[12px]">
            <Link href="https://www.facebook.com/" className="p-1.5 hover:bg-[var(--border)] rounded-lg duration-100">
              <FacebookIcon />
            </Link>
            <Link href="https://x.com" className="p-1.5 hover:bg-[var(--border)] rounded-lg duration-100">
              <TwitterIcon />
            </Link>
            <Link href="https://www.instagram.com/" className="p-1.5 hover:bg-[var(--border)] rounded-lg duration-100">
              <InstagramIcon />
            </Link>
            <Link href="https://mn.linkedin.com/" className="p-1.5 hover:bg-[var(--border)] rounded-lg duration-100">
              <LinkedinIcon />
            </Link>
          </div>
        </div>

        <div className="py-5 flex justify-between items-center border-t border-[var(--border)]">
          <div className="flex items-center gap-[10px]">
            <BlogLogo />
            <div className="flex flex-col gap-[2px]">
              <p className="text-xl font-normal font-jakarta text-[var(--logo)]">
                Meta <span className="font-extrabold">Blog</span>
              </p>
              <p className="text text-[var(--button-border)]">
                © All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-4 gap-2 md:items-center">
            <Link
              href="/"
              className="text text-[var(--button-border)] hover:text-[var(--arrow)] duration-100"
            >
              Terms of Use
            </Link>
            <div className="h-6 w-[1px] bg-[var(--border)] hidden md:block"></div>
            <Link
              href="/"
              className="text text-[var(--button-border)] hover:text-[var(--arrow)] duration-100"
            >
              Privacy Policy
            </Link>
            <div className="h-6 w-[1px] bg-[var(--border)] hidden md:block"></div>
            <Link
              href="/"
              className="text text-[var(--button-border)] hover:text-[var(--arrow)] duration-100"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
