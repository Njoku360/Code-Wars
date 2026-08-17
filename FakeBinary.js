// https://www.codewars.com/kata/57eae65a4321032ce000002d
// kata: Fake Binary
// My solution:
function fakeBin(x){
 return x
  .split('')
  .map(digit => {
   const num = Number(digit)
   return num < 5 ? '0' : '1'
 }).join('')
}