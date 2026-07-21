// https://www.codewars.com/kata/57a083a57cb1f31db7000028
// kata: Powers of 2
// My solution:
function powersOfTwo(n){
  let numPow = []
  for(let num = 0; num <= n; num++){
    numPow.push(Math.pow(2, num))
  }
  return numPow
}