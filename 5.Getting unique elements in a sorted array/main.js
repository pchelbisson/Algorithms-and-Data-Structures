let arrayNumbers = [
  79235553322, 79992337788, 79008909977, 79235553322, 79235553322, 79992337788,
  79992337788, 79008909977, 79008909977, 79235553322,
];
//compare each element with the previous one, and if it differs, push it to a new array
function uniqueNumbers(arr) {
  let result = [];
  //sorting
  arr.sort();
  //start at element at index 0
  let prevNumber = arr[0];
  //we go through the entire array, starting from 1, since we designated 0 above
  for (let i = 1; i < arr.length; i++) {
    //compare, and if they are not equal, then push to a new array
    if (prevNumber != arr[i]) {
      result.push(prevNumber);
      //we shift the current element to prevNumber for the next comparison
      prevNumber = arr[i];
    }
  }
  //we have nothing to compare the last sorted element with, so we just add it to the end of the new array
  result.push(prevNumber);

  return result;
}

console.log(uniqueNumbers(arrayNumbers));
