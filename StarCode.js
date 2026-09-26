// https://www.codewars.com/kata/5865918c6b569962950002a1
// kata: All Star Code Challenge
// My solution:
function strCount(str, letter){  
  //code here
  let count = 0
  for(const currentletter of str){
    if(currentletter === letter){
      count = count + 1
    }
  }
  return count
}