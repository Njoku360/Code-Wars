// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
// kata: Calculate average
// My solution:
function findAverage(array) {
  // your code here
  if(array.length >= 1){
   return array.reduce((a, c) => a + c, 0) / array.length
  }else{
     return 0
  }
}