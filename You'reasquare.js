// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
// kata: You're a square
// My solution:
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n))
}

function dnaStrand(dna){
  let pairs = {'A':'T', 'T':'A', 'C':'G', 'G':'C'}
  dna.split('').map(v => pairs[v]).join('')
  return dna
}