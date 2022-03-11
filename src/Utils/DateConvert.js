export const configDate = (unixTimestamp) => {
  // use current date if passed empty value
  let date = new Date();

  //convert Unix timestamp to js Date format and return formatted value if not ""
  if (unixTimestamp !== "") {
    date = new Date(unixTimestamp * 1000);

    let weekdayOutput = date.toLocaleString("default", { weekday: "long" });
    let monthOutput = date.toLocaleString("default", { month: "long" });
    let dayOutput = date.getDate();
    let yearOutput = date.getFullYear();

    return `${weekdayOutput}, ${monthOutput} ${dayOutput}, ${yearOutput}`;
  }
};

export const configTime = (unixTimestamp) => {
  // use current date if passed empty value
  let date = new Date();
  //convert Unix timestamp to js Date format if not ""
  if (unixTimestamp !== "") {
    date = new Date(unixTimestamp * 1000);

    let hours = date.getHours().toLocaleString();
    let minutes = date.getMinutes();
    let amPm = "";

    // convert hours to 12hr format
    switch (true) {
      case 0: {
        amPm = "AM";
        hours = 1;
        break;
      }
      case hours <= 12: {
        amPm = "AM";
        break;
      }
      case hours >= 13: {
        amPm = "PM";
        hours = parseInt(hours) - 12;
        break;
      }
      default:
        amPm = "";
    }

    return `${hours}:${minutes}${amPm}`;
  }
};
