// https://www.codewars.com/kata/58cb43f4256836ed95000f97
// kata: Difference of volume of cuboids
// My solution:
function findDifference(a, b) {
  //loading...
  let totala = 1
  a.forEach(num => {totala *= num})
  let totalb = 1
  b.forEach(n => {totalb *= n})
  return Math.abs(totala - totalb)
}