// https://www.codewars.com/kata/55c45be3b2079eccff00010f
// kata: Your Order, please
// My solution:
function order(words){
  // If it's an empty string, return an empty string
  if(!words) return ''
  
 // Extract digit from the string
  const getNumber = word =>{
    const digits = word.split('').filter(char => char >= '0' && char <= 9)
    return parseInt(digits, 10)
  }

// Split, sort based on extracted numbers, and rejoin
  return words
  .split(' ')
  .sort((a, b) => getNumber(a) - getNumber(b))
  .join(' ')
}