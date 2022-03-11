const setUVIColor = (uvi) => {
  switch (true) {
    case uvi >= 5.5:
      return "bg-alert text-light";
    case uvi >= 2.5:
      // also change text to maintain contrast
      return "bg-warning text-dark";
    case uvi > 0:
      return "bg-success text-light";
    default:
      return "";
  }
};

export default setUVIColor;
