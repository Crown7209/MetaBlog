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
    <div className="max-w-[392px] w-full border-[#E8E8EA] bg-white rounded-xl border p-4 flex flex-col gap-4 cursor-pointer hover:shadow-md hover:border-[rgb(211,211,211)] duration-200">
      <div className="overflow-hidden relative rounded-md">
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
      <div className="p-2 flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex">
            <p className="px-[10px] py-1 bg-[rgba(75,107,251,0.05)] rounded-md text-[#4B6BFB] text-sm font-medium font-text">
              {article?.tag_list[0]}
            </p>
          </div>
          <div className="overflow-hidden h-[84px]">
            <p className="text-2xl font-semibold font-text text-[#181A2A] leading-7">
              {article?.description}
            </p>
          </div>
        </div>
        <p className="text-base font-light font-text text-[#97989F]">
          {generatMonth(publishedDate.getMonth())} {publishedDate.getDay()},{" "}
          {publishedDate.getFullYear()}
        </p>
      </div>
    </div>
  );
};
