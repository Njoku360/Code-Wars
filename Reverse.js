// https://www.codewars.com/kata/57a55c8b72292d057b000594
// kata: Reverse Words in a String
// My solution:
function reverse(string){
  //your code here
  return string.trim().split(' ').filter(letter => letter !== '').reverse().join(' ')
}