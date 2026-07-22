// https://www.codewars.com/kata/57e1e61ba396b3727c000251
// kata: String cleaning
// My solution:
function stringClean(s){
  return s.split('').filter((n) => n != parseInt(n)).join('');
}