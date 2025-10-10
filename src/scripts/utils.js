export const formatDate = (date) => {
  let dateStr = date;

  if (date instanceof Date) {
    dateStr = date.toISOString();
  }

  return formatDateStr(dateStr);
};

const formatDateStr = (dateString) => {
  const options = [{ day: "numeric" }, { month: "long" }, { year: "numeric" }];
  const date = new Date(dateString.replace(/-/g, "\/").replace(/T.+/, ""));

  const format = (option) => {
    const formatter = Intl.DateTimeFormat("en-US", option);
    return formatter.format(date);
  };

  const dateArray = options.map(format); // [dd, mm, yyyy]
  return `${dateArray[1]} ${dateArray[0]}, ${dateArray[2]}`;
};
