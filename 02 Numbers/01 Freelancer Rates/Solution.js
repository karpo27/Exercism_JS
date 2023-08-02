const ratePerDay = 8;
const daysperMonth = 22;

export function dayRate(ratePerHour) {
  return ratePerHour * ratePerDay;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let discountMonth = Math.floor(numDays / daysperMonth);
  let remainingMonth = (numDays / daysperMonth - discountMonth);
  
  return Math.ceil(
    dayRate(ratePerHour) * daysperMonth * (discountMonth * (1 - discount) + remainingMonth)
  );
}
