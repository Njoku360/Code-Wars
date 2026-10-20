// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
// kata: A Needle In The HayStack
// My solution:
function findNeedle(haystack) {
  // your code here
  for(let i = 0; i < haystack.length; i++){
    if (haystack[i] === "needle"){
      return `found the needle at position ${haystack.indexOf('needle')}`
    }
  }
}