// https://www.codewars.com/kata/586f6741c66d18c22800010a
// kata: Sum of a Sequence
// My solution:
const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  let result = 0
  for(let i = begin; i <= end; i+=step){
    result += i
  }
  return result
};