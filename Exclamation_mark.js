// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed
// kata: Exclamation marks series #1: Remove a exclamation mark from the end of string
// My solution:
function replace(s) {
  //coding and coding....
  const vowels = 'aeiouAEIOU'
  const replaceVowel = s.split('').map(vowel => vowels.includes(vowel)? '!': vowel )
  .join('')
   return replaceVowel;
}