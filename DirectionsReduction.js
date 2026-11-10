// https://www.codewars.com/kata/550f22f4d758534c1100025a
// kata: Directions Reduction
// My solution:
function dirReduc(arr){
  // an object to look up the directions that are opposite 
  const opposite = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST': 'WEST',
    'WEST': 'EAST'
  }
  
  // use the reduction method to clear opposite directions and leave the directions that are not
  return arr.reduce((stack, dir) => {
    // Remove the directions that are opposite each other from the stack
    if(stack.length > 0 && stack[stack.length - 1] === opposite[dir]) {
      stack.pop()
      // if they are not, push the element to the stack
    } else {
      stack.push(dir)
    }
    return stack
  }, [])
}