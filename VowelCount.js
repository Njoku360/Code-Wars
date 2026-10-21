// https://www.codewars.com/kata/54ff3102c1bad923760001f3
// kata: Vowel Count
// My solution:
function getCount(str) {
  let vowelCount = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  
  for(let char of str){
    if(vowels.includes(char)){
      vowelCount += 1
    }
  }
  return vowelCount
}