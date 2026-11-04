// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
// kata: Maximum Subarray Sum
// My solution:
function maxSequence(xs) {
// Check if the array is empty
  if(xs.length === 0) return 0
  if(xs.every(num => num < 0)) return 0
  
//   Track the highest sum
  let highestMaxSoFar = xs[0]
  let currentMax = xs[0]
  
  
  for (let i = 1; i < xs.length; i++) {
    
    // Determine if the current number is added to the existing streak or start with the current number
    currentMax = Math.max(xs[i], currentMax + xs[i])
    
    // Update to the maximum sum so far
    highestMaxSoFar = Math.max(highestMaxSoFar, currentMax)
  }    
  return highestMaxSoFar
}