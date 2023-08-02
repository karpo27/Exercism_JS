function needsLicense(kind) {
  return kind == "car" || kind == "truck";
}

function chooseVehicle(option1, option2) {
  return option1 > option2 ? option2 + " is clearly the better choice." 
    : option1 + " is clearly the better choice.";
}

function calculateResellPrice(originalPrice, age) {
  return age < 3 ? 0.8 * originalPrice 
    : age > 10 ? 0.5 * originalPrice 
    : 0.7 * originalPrice;
}

export {needsLicense, chooseVehicle, calculateResellPrice};
