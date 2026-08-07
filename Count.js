// https://www.codewars.com/kata/566fc12495810954b1000030
// kata: Count the Digit
// My solution:
function nbDig(n, d) {
    // your code
  let count = ''
  for(let i = 0; i <= n; i++){
    count += i ** 2
  }return count.split(d).length - 1
}