/*
JavaScript Algorithms and Data Structures Masterclass
getDigit
(Helper function for Radix Sort)

Write a function getDigit which takes in a number and a place and returns the digit in the number at the given place value.
*/

const getDigit = (num, place) => {
  let numStr = num.toString();
  let numArr = numStr.split('');
  numArr.reverse();
  numStr = numArr.join('');

  return Number(numStr[place]);
}