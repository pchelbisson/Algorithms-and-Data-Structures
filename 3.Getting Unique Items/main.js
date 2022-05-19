let arrayNumbers = [
  79235553322, 79992337788, 79008909977, 79235553322, 79235553322,
];

function uniqueNumbers(arr) {
  let result = [];
  for (let num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
