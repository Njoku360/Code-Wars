// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc
// kata: Factorial
// My solution:
function factorial(n){
  // Calculate the factorial here
  if(n < 0 || n > 12){
    throw new RangeError("Input must be between 0 and 12")
  }
  
  let result = 1
  for (let i = 2; i <= n; i++){
    result *= i
  }
  
  return result
}