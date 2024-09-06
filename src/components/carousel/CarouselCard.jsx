export const CarouselCard = ({ article }) => {
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
    <div className="w-full rounded-xl cursor-pointer duration-200 relative">
      <div
        style={{
          backgroundImage: `url(${article.cover_image})`,
          background: `linear-gradient(0deg, rgba(20, 22, 36, 0.40) 0%, rgba(20, 22, 36, 0.40) 100%), url(${article.cover_image}) lightgray 50% / cover no-repeat`,
          width: "100%",
          height: "600px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          padding: "28px",
          display: "flex",
          alignItems: "end",
        }}
      >
        <div className="left-3 bottom-3 p-10 flex flex-col gap-6 bg-[#fff] rounded-xl max-w-[598px] w-full shadow-[0px_12px_24px_-6px_rgba(24,26,42,0.12)] border border-[#E8E8EA]">
          <div className="flex flex-col gap-4">
            <div className="flex">
              <p className="px-[10px] py-1 bg-[#4B6BFB] rounded-md text-[#fff] text-sm font-normal font-text">
                {article.tag_list[0]}
              </p>
            </div>
            <p className="text-[#181A2A] self-stretch text-4xl leading-10 font-semibold font-text h-[80px] overflow-hidden">
              {article.description}
            </p>
          </div>
          <p className="text-[#97989F] text-base font-light font-text">
            {generatMonth(publishedDate.getMonth())} {publishedDate.getDay()},{" "}
            {publishedDate.getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};
