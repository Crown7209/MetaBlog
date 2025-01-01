import { useEffect, useState } from "react";
import { BlogIcon } from "../svg/BlogIcon";
import { SearchIcon } from "../svg/SearchIcon";
import Link from "next/link";
import { NavIcon } from "../utils/NavIconChange";
import { SwitchIcon } from "../utils/SwitchIcon";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [articlesForSearch, setArticlesForSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  if (typeof window !== "undefined") {
    document.addEventListener("mousedown", () => {
      setIsOpen(false);
    });
  }

  const fetchSearchData = () => {
    fetch(`https://dev.to/api/articles?per_page=100`)
      .then((response) => response.json())
      .then((data) => setArticlesForSearch(data));
  };

  useEffect(() => {
    fetchSearchData();
  }, []);

  const filteredArticles = articlesForSearch?.filter((article) =>
    article?.title?.toLowerCase().includes(searchValue)
  );

  const handleInputChange = (event) => {
    setIsOpen(true);
    setSearchValue(event.target.value);
  };

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <header className="w-full flex justify-center fixed bg-[var(--background)] z-[1] border-b border-[var(--border)]">
      <div className="md:py-8 md:px-0 p-4 max-w-[1216px] w-full flex items-center justify-between">
        <Link href="/" className="max-w-[208px] w-full">
          <BlogIcon />
        </Link>

        {/* Menu */}
        <div className="md:hidden">
          <label
            for="menu"
            className="block md:hidden p-1.5"
            onClick={handleMenu}
          >
            <NavIcon />
          </label>
          <input type="checkbox" name="menu" id="menu" className="hidden" />
          {/* <Menu handleMenu={handleMenu} isOpenMenu={isOpenMenu} /> */}
        </div>

        <div className="max-w-[667px] w-full hidden md:flex md:justify-center md:gap-10 ">
          <Link
            href="/"
            className="text-base text-[var(--button-border)] font-normal font-text relative before:absolute before:bottom-[-4px] before:h-[3px] before:bg-[#D4A373] before:left-0 before:w-[0%] before:duration-300 before:hover:w-full hover:text-[var(--arrow)] "
          >
            Home
          </Link>
          <Link
            href="/blog-list"
            className="text-base text-[var(--button-border)] font-normal font-text relative before:absolute before:bottom-[-4px] before:h-[3px] before:bg-[#D4A373] before:left-0 before:w-[0%] before:duration-300 before:hover:w-full hover:text-[var(--arrow)]"
          >
            Blog
          </Link>
          <Link
            href="/contact-us"
            className="text-base text-[var(--button-border)] font-normal font-text relative before:absolute before:bottom-[-4px] before:h-[3px] before:bg-[#D4A373] before:left-0 before:w-[0%] before:duration-300 before:hover:w-full hover:text-[var(--arrow)]"
          >
            Contact
          </Link>
        </div>
        <div className="items-center gap-4 hidden md:flex">
          <label for="check" className="cursor-pointer ">
            <SwitchIcon />
          </label>
          <div className="flex flex-col max-w-[168px] relative">
            <div className="md:flex gap-3 items-center bg-[var(--search)] py-2 pr-2 pl-4 rounded-[5px] hidden border border-[var(--border)]">
              <input
                value={searchValue}
                onChange={handleInputChange}
                type="text"
                placeholder="Search"
                className="outline-none border-none bg-transparent font-inter text-sm font-normal text-[#A1A1AA] max-w-[114px]"
              />
              <SearchIcon />
            </div>
            <SearchDropDown
              setIsOpen={setIsOpen}
              value={searchValue}
              isOpen={isOpen}
              filteredArticles={filteredArticles}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const SearchDropDown = ({
  filteredArticles,
  isOpen,
  setIsOpen,
  setSearchValue,
}) => {
  filteredArticles.length = 5;
  const handleClickLink = () => {
    setIsOpen(false);
    setSearchValue("");
  };
  return (
    <div
      className={` ${
        isOpen ? "visible" : "invisible"
      } duration-200 transition-all absolute bg-[var(--search)] rounded-[5px] border border-[var(--border)] hover:border-[var(--border-hover)] top-[37px] py-2 flex flex-col `}
    >
      {filteredArticles?.map((article) => {
        return (
          <Link onClick={handleClickLink} href={`/blog-list/${article?.id}`}>
            <div className="duration-0 p-2 text-[var(--button-border)] hover:bg-[var(--border)]">
              {article?.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
