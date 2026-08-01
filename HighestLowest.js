// https://www.codewars.com/kata/554b4ac871d6813a03000035
// kata: Disemvowel trolls
// My solution:
function highAndLow(numbers){
  // ...
  let num = numbers.split(' ')
  const h = Math.max(...num)
  const l = Math.min(...num)
  return `${h} ${l}`
}