// https://www.codewars.com/kata/558fc85d8fd1938afb000014
// kata: Sum of Two Lowest Positive Integers
// My solution:
function sumTwoSmallestNumbers(numbers) {  
  // Code here
  numbers = numbers.sort((a, b) => a - b)
  let solution = numbers[0] + numbers[1]
  return solution
}