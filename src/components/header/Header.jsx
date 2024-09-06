import { BlogIcon } from "../svg/BlogIcon";
import { SearchIcon } from "../svg/SearchIcon";

export const Header = () => {
  return (
    <header className="w-full flex justify-center">
      <div className="py-8 max-w-[1216px] w-full flex items-center justify-between">
        <a href="./">
          <BlogIcon />
        </a>
        <div className="max-w-[667px] w-full flex justify-center gap-10">
          <a href="./" className="text-base text-[#3B3C4A] font-normal font-text">
            Home
          </a>
          <a href="./blog-list" className="text-base text-[#3B3C4A] font-normal font-text">
            Blog
          </a>
          <a href="./contact-us" className="text-base text-[#3B3C4A] font-normal font-text">
            Contact
          </a>
        </div>
        <div className="flex gap-3 items-center bg-[#F4F4F5] py-2 pr-2 pl-4 rounded-[5px]">
          <input
            type="text"
            placeholder="Search"
            className="outline-none border-none bg-transparent font-inter text-sm font-normal text-[#A1A1AA] max-w-[114px] "
          />
          <SearchIcon />
        </div>
      </div>
    </header>
  );
};
