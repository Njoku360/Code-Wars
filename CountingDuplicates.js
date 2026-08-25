// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
// kata: Counting Duplicates
// My solution:
function duplicateCount(text){
  //...
  const counts = {}
  const duplicates = {}
  let totalNumofDup = 0
  const lowCase = text.toLowerCase()
  
  const validChars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < lowCase.length; i++){
    const char = lowCase[i]

    if(validChars.includes(char)){
      counts[char] = (counts[char] || 0) + 1
      
      if(counts[char] > 1 && !duplicates[char]){
        duplicates[char] = true
        totalNumofDup += 1
      }
    }
  }
  
  return totalNumofDup
}