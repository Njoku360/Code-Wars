// https://www.codewars.com/kata/52fba66badcd10859f00097e
// kata: Disemvowel trolls
// My solution:
let disemvowel = function(str){
  let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let removeVowel = str.split('').filter(l => !vowel.includes(l)).join('')
  return removeVowel
}