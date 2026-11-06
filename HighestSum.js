function maxSequence(xs) {
// Check if the array is empty
  if(xs.length === 0) return 0
  if(xs.every(num => num < 0)) return 0
  
//   Track the highest sum
  let highestMaxSoFar = xs[0]
  let currentMax = xs[0]
  
//   // Track the list of intgers in the array that made maximum sum of a sub array
//   let start = 0
//   let end = 0
//   let tempStart = 0 //
  
  for (let i = 1; i < xs.length; i++) {
//     if (xs[i] > currentMax + xs[i]) 
    currentMax = Math.max(xs[i], currentMax + xs[i])
    
    highestMaxSoFar = Math.max(highestMaxSoFar, currentMax)
    
//       tempStart = i // A pointer for the starter of the subarray
//     } else {
//       currentMax = currentMax + xs[i]
//     }
    
    // Track the highest/maximum sum for the subarray
//     if(currentMax > highestMaxSoFar) {
//       highestMaxSoFar = currentMax
//       start = tempStart // The official start index
//       end = i // The official end index
//     }
  }
  
//   const maximumSumSubArray = xs.slice(start, end + 1)
  
  return highestMaxSoFar
}