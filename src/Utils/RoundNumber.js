const roundNumber = (numStr) => {
  // if != "" round to nearest whole number
  if (numStr !== "") {
    return Math.round(numStr);
  }
};

export default roundNumber;
