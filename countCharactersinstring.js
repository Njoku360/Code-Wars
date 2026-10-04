// https://www.codewars.com/kata/52efefcbcdf57161d4000091
// kata: count Characters in string
// My solution:
function count(string) {
  // TODO
  const result = {} 
//   Do a for of loop to iterate through each character in the string
  for (const char of string) {
     result[char] = (result[char] || 0) + 1
  }
  return result
}