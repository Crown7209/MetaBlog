export const TrendingCard = ({ article }) => {
  return (
    <div className="w-full rounded-xl cursor-pointer hover:shadow-md hover:border-[rgb(211,211,211)] duration-200 relative">
      <div
        style={{
          backgroundImage: `url(${article.cover_image})`,
          background: `linear-gradient(0deg, rgba(20, 22, 36, 0.40) 0%, rgba(20, 22, 36, 0.40) 100%), url(${article.cover_image}) lightgray 50% / cover no-repeat`,
          width: "100%",
          height: "320px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          padding: "28px",
          display: "flex",
          alignItems:"end",
        }}
      >
        <div className="flex flex-col gap-4">
          <div className="flex">
            <p className="px-[10px] py-1 bg-[#4B6BFB] rounded-md text-[#fff] text-xs leading-5 font-normal font-text">
              {article.tag_list[0]}
            </p>
          </div>
          <p className="text-[#fff] text-lg font-semibold font-text h-[80px] overflow-hidden">
            {article.title}
          </p>
        </div>
      </div>
    </div>
  );
};
