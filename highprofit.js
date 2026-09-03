// https://www.codewars.com/kata/559590633066759614000063
// kata: Highest profit wins
// My solution:
function minMax(arr){
  arr = arr.sort((a, b) => a - b)
  return [arr[0], arr[arr.length - 1]]
}