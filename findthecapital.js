// https://www.codewars.com/kata/539ee3b6757843632d00026b
// kata: Find The Capital
// My solution:
var capitals = function (word) {
	// Write your code here
  let result = []
  let words = word.split('')
  for (let i = 0; i < words.length; i++){
    if(words[i] === words[i].toUpperCase()){
      result.push(i)
    }
  }
  return result
}