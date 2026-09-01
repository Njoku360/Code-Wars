// https://www.codewars.com/kata/52ceafd1f235ce81aa00073a
// kata: Find the Next Perfect Square
// My solution:
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  const root = Math.sqrt(sq)
  if(Number.isInteger(root)){
    return (root + 1)**2
  }else {
    return -1    
  }
 
}