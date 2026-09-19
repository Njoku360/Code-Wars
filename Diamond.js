// https://www.codewars.com/kata/5503013e34137eeeaa001648
// kata: Give me a Diamond
// My solution:
function diamond(n){
//   Return null for even numbers, negative
  if(n <= 0 || n % 2 === 0){
    return null
  }
  let result = ''
  const middle = Math.floor(n / 2)
  
//middle - i   Loop through each row of the diamond
  for(let i = 0; i < n; i++){
//     Calculate how far the current row is from the middle, whether top or bottom
    const distanceFromMiddle = Math.abs(middle - i)
//     Determine spaces and asterisks for the row
    const spaces = " ".repeat(distanceFromMiddle)
    const asterisks = '*'.repeat(n - 2 * distanceFromMiddle)
//     Construct the line and append it to the result
    result += spaces + asterisks + '\n'
  }
  return result
}