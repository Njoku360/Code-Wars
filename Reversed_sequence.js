// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// kata: Reversed sequence
// My solution:
const reverseSeq = n => {
  array = []
  for(let i = n; i >= 1; i--){
    array.push(i)
  }
  return array;
};