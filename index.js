// Code your solution in this file!
// 1. Return first two drivers
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// 2. Return last two drivers
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// 3. Selecting drivers array
const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

// 4. Create fare multiplier
function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

// 5. Fare doubler
const fareDoubler = createFareMultiplier(2);

// 6. Fare tripler
const fareTripler = createFareMultiplier(3);

// 7. Select different drivers
function selectDifferentDrivers(arrayOfDrivers, driverFunction) {
  return driverFunction(arrayOfDrivers);
}
