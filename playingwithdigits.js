// https://www.codewars.com/kata/5552101f47fc5178b1000050
// kata: Playing With Digits
// My solution:
function digPow(n, p){
  // ...
  const numtoStr = n.toString()
  let totalSum = 0
  
  for(let i = 0; i < numtoStr.length; i++){
    const digit = parseInt(numtoStr[i])
    totalSum += Math.pow(digit, p + i)
  }
  
  if(totalSum % n === 0){
    return totalSum / n 
  }
  return -1
}