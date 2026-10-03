// https://www.codewars.com/kata/5b180e9fedaa564a7000009a
// kata: Fix String Case
// My solution:
function solve(s){
    //..
  let lowCase = 0
  let upCase = 0
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){
       upCase++
    }else{
      lowCase++
    }
  }
  return lowCase >= upCase ? s.toLowerCase() : s.toUpperCase()
}