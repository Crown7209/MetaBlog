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
    <div className="md:w-[1216px] w-screen rounded-xl cursor-pointer duration-200 relative px-2 md:px-0">
      <div
        className="md:h-[600px] h-[280px] md:p-7 p-2 "
        style={{
          backgroundImage: `url(${article.cover_image})`,
          background: `linear-gradient(0deg, rgba(20, 22, 36, 0.40) 0%, rgba(20, 22, 36, 0.40) 100%), url(${article.cover_image}) lightgray 50% / cover no-repeat`,
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          display: "flex",
          alignItems: "end",
        }}
      >
        <div className="left-0 bottom-0 md:p-10 p-3 flex flex-col md:gap-6 gap-2 bg-[var(--background)] md:rounded-xl rounded-md max-w-[598px] w-full shadow-[0px_12px_24px_-6px_rgba(24,26,42,0.12)] border border-[var(--border)]">
          <div className="flex flex-col md:gap-4 gap-2">
            <div className="flex">
              <p className="md:px-[10px] px-2 py-1 bg-[#4B6BFB] rounded-md text-[#fff] md:text-sm text-xs font-normal font-text">
                {article.tag_list[0]}
              </p>
            </div>
            <p className="text-[var(--primary-text)] self-stretch md:text-4xl text-xl md:leading-10 leading-6 md:font-semibold font-medium font-text md:h-[80px] h-[50px] overflow-hidden">
              {article.description}
            </p>
          </div>
          <p className="text-[var(--date)] md:text-base text-sm font-normal font-text">
            {generatMonth(publishedDate.getMonth())} {publishedDate.getDay()},{" "}
            {publishedDate.getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};
