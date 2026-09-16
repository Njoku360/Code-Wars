// https://www.codewars.com/kata/54e6533c92449cc251001667
// kata: Unique In Order
// My solution:
var uniqueInOrder=(iterable) =>{
  return [...iterable].filter((item, index) => item !== iterable[index + 1] )
}
