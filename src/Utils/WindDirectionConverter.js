const degreesToDirection = (windDegrees) => {
  // direction breakdown taken from http://snowfence.umn.edu/Components/winddirectionanddegrees.htm

  if (windDegrees !== "") {
    switch (true) {
      case windDegrees >= 348.75 || windDegrees < 11.25:
        return "N";
      case windDegrees < 33.75:
        return "NNE";
      case windDegrees < 56.25:
        return "NE";
      case windDegrees < 78.75:
        return "ENE";
      case windDegrees < 101.25:
        return "E";
      case windDegrees < 123.75:
        return "ESE";
      case windDegrees < 146.25:
        return "SE";
      case windDegrees < 168.75:
        return "SSE";
      case windDegrees < 191.25:
        return "S";
      case windDegrees < 213.75:
        return "SSW";
      case windDegrees < 236.25:
        return "SW";
      case windDegrees < 258.75:
        return "WSW";
      case windDegrees < 281.25:
        return "W";
      case windDegrees < 303.75:
        return "WNW";
      case windDegrees < 326.25:
        return "NW";
      case windDegrees < 348.75:
        return "NNW";
      default:
        return "";
    }
  }
};

export default degreesToDirection;
