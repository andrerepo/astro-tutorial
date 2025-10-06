export const formatDate = (dateString) => {
  const options = [{ day: "numeric" }, { month: "long" }, { year: "numeric" }];

  const date = new Date(dateString.replace(/-/g, "\/").replace(/T.+/, ""));

  const format = (option) => {
    const formatter = Intl.DateTimeFormat("en", option);
    return formatter.format(date);
  };

  const dateArray = options.map(format);
  return dateArray.join("/");
};
