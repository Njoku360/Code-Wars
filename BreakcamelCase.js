// https://www.codewars.com/kata/5bb904724c47249b10000131
// kata: Total_amount_of_points
// My solution:
function solution(string){
  let result = ""
  for(let i = 0; i < string.length; i++){
    let l = string[i]
    if(i > 0 && l === l.toUpperCase()){
      result += ' '
    }
    result += l
  }
  return result
}
