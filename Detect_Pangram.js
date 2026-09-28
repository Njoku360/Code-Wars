// https://www.codewars.com/kata/545cedaa9943f7fe7b000048
// kata: Detect Pangram
// My solution:
function isPangram(string){
  //...
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const toLowercaseString = string.toLowerCase()
  
  for(let i = 0; i < alphabet.length; i++){
    const currentLetter = alphabet[i]
    
    if(!toLowercaseString.includes(currentLetter))return false
  }
  return true
}