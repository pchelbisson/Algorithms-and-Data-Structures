//=== 1 option =============================================

const array = [10, 4, 7, 1, 78, 45, 9];
array.sort((a, b) => a - b); //sort from smallest to largest
let maxNumberInArray = array[array.length - 1];

//=== 1A option =============================================

const arrray = [10, 4, 7, 1, 78, 45, 9];
let max = Math.max(...array);

//=== 2 option (faster) ====================================

const secondArray = [10, 4, 7, 1, 78, 45, 9];
let maxNum = 0;
for (let i = 0; i < secondArray.length; i++) {
  maxNum = Math.max(maxNum, secondArray[i]); //looping through the array, each larger value is assigned to a variable, so we find the largest number
}
