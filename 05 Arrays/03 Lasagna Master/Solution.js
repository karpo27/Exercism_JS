function cookingStatus(remainingTime){
  if (remainingTime === 0){
    return 'Lasagna is done.';
  } else if (remainingTime !== 0 && typeof remainingTime === 'number'){
    return 'Not done, please wait.';
  } else {
    return 'You forgot to set the timer.';
  }
}

function preparationTime(layers, avgTime = 2){
  return layers.length * avgTime
}

function quantities(layers){
  let sauce = 0;
  let noodles = 0;
  
  for (let layer of layers) {
    if (layer == 'sauce'){
      sauce += 0.2;
    } else if (layer == 'noodles'){
      noodles += 50;
    }
  }
  return {'noodles': noodles, 'sauce': sauce};
}

function addSecretIngredient(friendsList, myList){
  myList.push(friendsList[friendsList.length - 1]);
}

function scaleRecipe(recipe, portions){
  const total_recipe = {...recipe};
  for(const quantity in total_recipe){
    total_recipe[quantity] *= portions/2;
  }
  return total_recipe;
}

export {cookingStatus, preparationTime, quantities, addSecretIngredient, scaleRecipe };
