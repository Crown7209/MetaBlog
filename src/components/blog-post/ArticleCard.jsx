export const ArticleCard = ({ article }) => {
  const publishedDate = new Date(article.published_at);

  const generatMonth = (month) => {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  };

  return (
    <div className="md:max-w-[392px] w-full border-[var(--border)] bg-[var(--background)] rounded-xl border md:p-4 p-2 flex flex-col gap-4 cursor-pointer hover:shadow-md hover:border-[var(--border-hover)] duration-200">
      <div className="overflow-hidden relative md:rounded-md rounded-lg">
        <div
          className="hover:scale-110 duration-150 ease-linear"
          style={{
            backgroundImage: `url(${article?.cover_image})`,
            width: "100%",
            height: "240px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "6px",
          }}
        ></div>
      </div>
      <div className="p-2 flex flex-col md:gap-5 gap-3">
        <div className="flex flex-col md:gap-4 gap-2">
          <div className="flex">
            <p className="md:px-[10px] px-2 py-1 bg-[rgba(75,107,251,0.05)] rounded-md text-[#4B6BFB] md:text-sm text-xs font-medium font-text">
              {article?.tag_list[0]}
            </p>
          </div>
          <div className="overflow-hidden md:h-[84px] h-[72px]">
            <p className="md:text-2xl text-xl font-semibold font-text text-[var(--primary-text)] md:leading-7 leading-6">
              {article?.description}
            </p>
          </div>
        </div>
        <p className="md:text-base text-sm font-normal font-text text-[var(--date)]">
          {generatMonth(publishedDate.getMonth())} {publishedDate.getDay()},{" "}
          {publishedDate.getFullYear()}
        </p>
      </div>
    </div>
  );
};
