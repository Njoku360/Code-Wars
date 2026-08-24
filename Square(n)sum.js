// https://www.codewars.com/kata/546e2562b03326a88e000020
// kata: Square(n)Sum
// My solution:
function squareSum(numbers){
  let sum = 0
 for(let i = 0; i < numbers.length; i++){
   numbers[i] = numbers[i] ** 2
   sum += numbers[i]
 }
  return sum
}