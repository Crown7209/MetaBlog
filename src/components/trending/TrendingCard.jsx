export const TrendingCard = ({ article }) => {
  return (
    <div className="md:max-w-[286px] md:w-full w-[220px] rounded-xl cursor-pointer hover:shadow-md hover:border-[rgb(211,211,211)] duration-200 relative overflow-hidden ">
      <div
        className="hover:scale-110 duration-150 ease-linear md:p-7 p-4 md:h-[320px] h-[280px]"
        style={{
          backgroundImage: `url(${article?.cover_image})`,
          background: `linear-gradient(0deg, rgba(20, 22, 36, 0.40) 0%, rgba(20, 22, 36, 0.40) 100%), url(${article?.cover_image}) lightgray 50% / cover no-repeat`,
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          display: "flex",
          alignItems:"end",
        }}
      >
        <div className="flex flex-col md:gap-4 gap-2">
          <div className="flex">
            <p className="md:px-[10px] px-2 py-1 bg-[#4B6BFB] rounded-md text-[#fff] text-xs md:leading-5 leading-4 font-normal font-text">
              {article?.tag_list[0]}
            </p>
          </div>
          <p className="text-[#fff] text-lg md:leading-7 leading-5 md:font-semibold font-medium font-text md:h-[80px] h-[60px] overflow-hidden">
            {article?.title}
          </p>
        </div>
      </div>
    </div>
  );
};
