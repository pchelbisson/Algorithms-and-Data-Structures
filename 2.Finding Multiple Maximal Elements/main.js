//=== 1 option =============================================

const array = [10, 4, 7, 1, 78, 45, 9];
let maxNum = 0; //first max number
let maxNum2 = 0; // second max number
for (let i = 0; i < array.length; i++) {
  maxNum = Math.max(maxNum, array[i]);
}

for (let i = 0; i < array.length; i++) {
  if (array[i] < maxNum) {
    maxNum2 = Math.max(maxNum2, array[i]);
  }
}

//=== 2 option (faster and better) ====================================
//find the maximum number that is less than the given
function findMaxUnderBoundary(arr, topBoundary) {
  let currentMax = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < topBoundary) {
      currentMax = Math.max(currentMax, arr[i]);
    }
  }
  return currentMax;
}

function findTopElements(arr, numOfElements) {
  let topElements = [numOfElements];
  let previousMax = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < numOfElements; i++) {
    let currentMax = findMaxUnderBoundary(arr, previousMax);
    previousMax = currentMax;
    topElements[i] = currentMax;
  }
  return topElements;
}

//this method can also be used as a method for sorting an array
