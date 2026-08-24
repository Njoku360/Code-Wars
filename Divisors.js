// https://www.codewars.com/kata/542c0f198e077084c0000c2e
// kata: Count the divisors of a number
// My solution:
function getDivisorsCnt(n){
    // todo
  let count = 0
  let div = Math.sqrt(n)
  for(let i = 1; i <= div; i++){
    if(n % i === 0){
      if(n / i === i){
        count += 1
      }else{
        count += 2
      }
    }
  }
  return count
}