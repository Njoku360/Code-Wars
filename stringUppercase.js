// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b
// kata: Is the string uppercase
// My solution:
String.prototype.isUpperCase = function() {
  // your code here
  return this == this.toUpperCase()
}