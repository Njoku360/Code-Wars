// https://www.codewars.com/kata/57fae964d80daa229d000126
// kata: Exclamation marks series #1: Remove an exclamation mark from the end of string
// My solution:
function remove (string) {
  //coding and coding....
  if(string.endsWith('!')){
     string = string.slice(0, -1)
  }
  return string
}