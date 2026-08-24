// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
// kata: Reverse words
// My solution:
function reverseWords(str) {
  // Go for itgit 
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

