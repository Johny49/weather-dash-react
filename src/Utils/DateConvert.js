export const configDate = (unixTimestamp, timezoneOffset) => {
  // use current date if passed empty value; also to calculate timezone offset
  let date = new Date();

  //convert Unix timestamp to js Date format and return formatted value if not ""
  if (unixTimestamp !== "") {
    // caclulate timezone difference to display relative to searched location, not user
    let localOffset = date.getTimezoneOffset() * 60;
    let timeDiff = localOffset + timezoneOffset;

    date = new Date((unixTimestamp + timeDiff) * 1000);

    let weekdayOutput = date.toLocaleString("default", { weekday: "long" });
    let monthOutput = date.toLocaleString("default", { month: "long" });
    let dayOutput = date.getDate();

    return `${weekdayOutput}, ${monthOutput} ${dayOutput}`;
  }
};

export const configTime = (unixTimestamp, timezoneOffset) => {
  // use current date if passed empty value
  let date = new Date();

  // caclulate timezone difference to display times relative to searched location, not user location
  let localOffset = date.getTimezoneOffset() * 60;
  let timeDiff = localOffset + timezoneOffset;

  //convert Unix timestamp to js Date format if not "" and adjust for offset
  if (unixTimestamp !== "") {
    date = new Date((unixTimestamp + timeDiff) * 1000);

    let hours = date.getHours();
    let minutes = String(date.getMinutes()).padStart(2, "0");
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

    return `${hours}:${minutes} ${amPm}`;
  }
};
