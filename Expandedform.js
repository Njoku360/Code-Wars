// https://www.codewars.com/kata/5842df8ccbd22792a4000245
// kata: Write Number in Expanded Form
// My solution:
function expandedForm(num) {
  // Your code here
  const str = String(num)
  const result = []
  
  for(let i = 0; i < str.length; i++){
    const digit = str[i]
    const placeValue = digit * Math.pow(10, str.length - 1 - i)
    
    if(placeValue != 0){
      result.push(placeValue)
    }
  }
  return result.join(' + ')
}