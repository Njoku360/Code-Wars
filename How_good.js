// https://www.codewars.com/kata/5601409514fc93442500010b
// kata: How good are you ?
// My solution:
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = classPoints.reduce((a,c) => a + c, 0)
  let average = sum / classPoints.length
  return yourPoints > average ? true : false
}