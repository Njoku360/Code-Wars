function sumPairs(ints, s) {
  //   Track numbers we have already passed
  const seen = new Set()
  
 // Iterate through each of them numbers in the array
  for (const num of ints) {
    const complement = s - num
    
// If the complement is in our set, we found the earliest completed pair by the smallest index
    if (seen.has(complement)) {
      return [complement, num]
    }
    
//  Otherwise, add the current number to the set and keep moving to find the complement
    seen.add(num)
  }
  
//   Return undefined if no matching pair is found for the sum
  return undefined
}