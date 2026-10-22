// https://www.codewars.com/kata/55f2b110f61eb01779000053
// kata: Beginner Series
// My solution:
function getSum(a, b){
   //Good luck!
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  
  let sum = 0
  for (let i = min; i <= max; i++){
    sum += i
  }
  return sum
}