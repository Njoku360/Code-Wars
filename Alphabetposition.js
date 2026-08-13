//https://www.codewars.com/kata/546f922b54af40e1e90001da
// kata: Replace with alphabet position
// My solution
function alphabetPosition(text) {
  return text.toLowerCase().split('').filter(l => l >= 'a' && l <= 'z').map(l => l.charCodeAt(0) - 96).join(' ')
}