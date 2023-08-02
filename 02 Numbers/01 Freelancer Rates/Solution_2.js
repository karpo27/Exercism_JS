const ratePerDay = 8;
const daysperMonth = 22;

function dayRate(ratePerHour) {
  return ratePerHour * ratePerDay;
}

function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const discountMonth = Math.floor(numDays / daysperMonth);
  const remainingMonth = numDays / daysperMonth - discountMonth;
  
  return Math.ceil(
    dayRate(ratePerHour) * daysperMonth * (discountMonth * (1 - discount) + remainingMonth)
  );
}

export {dayRate, daysInBudget, priceWithMonthlyDiscount};
