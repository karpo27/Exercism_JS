function twoSum(array1, array2) {
  let total1 = "";
  let total2 = "";
  
  array1.forEach(value => {
    total1 += String(value);
  })
  array2.forEach(value => {
    total2 += String(value);
  })

  return Number(total1) + Number(total2);
}

function luckyNumber(value) {
  let compareValue = String(value).split("").reverse().join("");
  return String(value) === compareValue;
}

function errorMessage(input) {
  if (!input){
    return "Required field";
  } else if (isNaN(Number(input)) || Number(input) === 0){
    return "Must be a number besides 0";
  } else {
    return "";
  }
}

export {twoSum, luckyNumber, errorMessage};
