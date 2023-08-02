function distanceFromHqInBlocks(streetNumber) {
  return Math.abs(42 - streetNumber);
  //returns the number of blocks given a value
  //distance from 42 (either plus or minus, absolute value?)
}

function distanceFromHqInFeet(streetNumber) {
  return distanceFromHqInBlocks(streetNumber) * 264;
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
  //each block is 264 feet
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
  //returns the number of feet traveled
  //(start-destination)*264 (but what if they travel from uptown to downtown?)
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0.0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25.0;
  } else if (distance >= 2500) {
    return "cannot travel that far";
  }
}
