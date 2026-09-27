//https://www.codewars.com/kata/529eef7a9194e0cbc1000255
// kata: Anagram detection
// My solution
// write the function isAnagram
var isAnagram = function(test, original) {
//   Check if both lengths are equal
  if(test.length !== original.length) return false
  
  const normalize = (str) => str.toLowerCase().split('').sort().join('')
  return normalize(test) === normalize(original)
};