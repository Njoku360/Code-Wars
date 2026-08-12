// https://www.codewars.com/kata/57f609022f4d534f05000024
// kata: find the stray number
// My solution:
function stray(numbers) {
  return numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num))
}