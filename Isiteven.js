// https://www.codewars.com/kata/555a67db74814aa4ee0001b5
// kata: Is it even?
// My solution:
function testEven(n) {
    //Your awesome code here!
  if(!Number.isInteger(n)){
    return false
  }
  return n % 2 === 0
}