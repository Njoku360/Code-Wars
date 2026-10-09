// https://www.codewars.com/kata/5899642f6e1b25935d000161
// kata: Merge two sorted arrays into one 
// My solution:
function mergeArrays(arr1, arr2) {
  const newArray = [...new Set([...arr1, ...arr2])]
    return newArray.sort((a, b) => a - b)
}