// https://www.codewars.com/kata/57eaeb9578748ff92a000009
// kata: Sum Mixed Array
// My solution:
function sumMix(x){
  x = x.reduce((a, c) => a + +c, 0)
  return x
}