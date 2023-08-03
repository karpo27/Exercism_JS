const JUICES_TIMES = {
    'Pure Strawberry Joy': 0.5,
    'Energizer': 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5
  };

function timeToMixJuice(name) {
  if (name in JUICES_TIMES){
    return JUICES_TIMES[name];
  } else {
    return 2.5
  }
}

function limesToCut(wedgesNeeded, limes) {
  const wedgesPerLime = {
    'small': 6,
    'medium': 8,
    'large': 10
  };
  let total = 0;
  for (let i = 0; i < limes.length; i++){
    if (total >= wedgesNeeded){
      return i;
    }
    total += wedgesPerLime[limes[i]];
  }
  return limes.length;
}

function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0){
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}

export {timeToMixJuice, limesToCut, remainingOrders};
