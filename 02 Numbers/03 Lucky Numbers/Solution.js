function twoSum(array1, array2) {
  let total1 = "";
  let total2 = "";
  
  for (let i = 0; i < array1.length; i++) {
    total1 += String(array1[i]);
  }
  for (let i = 0; i < array2.length ; i++){
    total2 += String(array2[i]);
  }

  return Number(total1) + Number(total2);
}

function luckyNumber(value) {
  let compareValue = String(value).split("").reverse().join("");
  return String(value) == compareValue;
}

function errorMessage(input) {
  console.log(isNaN(Number(input)));
  if (input == "" || input == null || input == undefined){
    return "Required field";
  } else if (isNaN(Number(input)) == true || Number(input) == 0){
    return "Must be a number besides 0";
  } else {
    return "";
  }
}

export {twoSum, luckyNumber, errorMessage};
