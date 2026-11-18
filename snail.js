// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
// kata: Snail
// My solution:
function snail(array) {
  // create an empty array to fill in each element in each array in a clockwise direction.
  const result = []
  
  /* Create a copy of the array so we don't mutate the original array
  because the original needs to be passed as an argument*/
  const matrix = array.map(row => [...row])
  
  while (matrix.length > 0) {
    // first, move right. Grab the entire top row
    result.push(...matrix.shift())
    
    // second step, move down. Grab the last element of each remaining row
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].length > 0) {
        result.push(matrix[i].pop())
      }
    }
    
    // third step. Grab the bottom row in reverse order
    if (matrix.length > 0) {
      result.push(...matrix.pop().reverse())
    }
    
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i].length > 0) {
        result.push(matrix[i].shift())
      }
    }
  }
  
  return result
}