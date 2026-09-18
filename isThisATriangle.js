// https://www.codewars.com/kata/56606694ec01347ce800001b
// kata: Is This is a Triangle
// My solution:
function isTriangle(a,b,c){
// It returns true if all conditions are met, else returns false
  return a + b > c && a + c > b && b + c > a
}