function comp(array1, array2){
  //if either array is null, undefined, or missing, return false
  if (!array1 || !array2){
    return false
  }
  
// Length check
  if (array1.length !== array2.length){
    return false
  }
  
//   Create an object to determine the number of times an element occurs
  const frequencyCount = {}
  
//   Loop through array1 to build frequency count
  for (let val of array1){
    frequencyCount[val] = (frequencyCount[val] || 0) + 1
  }
  
//   Verify if the squares are all squares of array1 by decrement by 1
  for (let square of array2){
    let base = Math.sqrt(square)
    
    if (!frequencyCount[base]){
      return false
    }
    
    frequencyCount[base] -= 1
  }
  
//   Return true if it passes all verification
  return true 
  
}