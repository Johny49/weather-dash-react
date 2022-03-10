const configDate = (unixTimestamp) => {
  // use current date if passed empty value
  let date = new Date();
  //convert Unix timestamp to js Date format if not ""
  if (unixTimestamp !== "") {
    date = new Date(unixTimestamp * 1000);
  }

  let weekdayOutput = date.toLocaleString("default", { weekday: "long" });
  let monthOutput = date.toLocaleString("default", { month: "long" });
  let dayOutput = date.getDate();
  let yearOutput = date.getFullYear();

  return `${weekdayOutput}, ${monthOutput} ${dayOutput}, ${yearOutput}`;
};

export default configDate;
