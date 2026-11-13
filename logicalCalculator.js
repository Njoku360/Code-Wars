// https://www.codewars.com/kata/57096af70dad013aa200007b
// kata: Logical Calculator
// My solution:
// Parameters = array and an operator
// Return = True or False
// Example = [True, True] and 'XOR' will return False
/* Pseudo = 
* declare our function
* array and operator as our parameters
* One of the element(true/false) as our first element in an array for comparison
* We create a for loop
* We do an if condition to compare values
* we return the final value */

function logicalCalc(array, op){
  let result = array[0]
  
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i]
    if (op === "AND") {
      result = result && currentValue
    } else if (op === "OR") {
      result = result || currentValue
    }else if (op === "XOR") {
      result = result !== currentValue
    }
  }
  return result
}