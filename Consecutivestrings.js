// https://www.codewars.com/kata/56a5d994ac971f1ac500003e
// kata: Consecutivestrings.js
// My solution:
function longestConsec(strarr, k) {
    // your code
  const l = strarr.length
  if(l === 0 || k > l || k <= 0) return ''
  let highestStr = ''
  for(let i = 0; i <= l - k; i++){
    const currentStr = strarr.slice(i, i + k).join('')
    if(currentStr.length > highestStr.length){
      highestStr = currentStr
    }
  }
  return highestStr
}