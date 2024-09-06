export const Date = ({article}) => {
    
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
    <p className="text-base font-normal font-text text-[#97989F]">
      {publishedDate.getFullYear()}-{generatMonth(publishedDate.getMonth())}-
      {publishedDate.getDay()}
    </p>
  );
};
