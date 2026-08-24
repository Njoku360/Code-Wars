// https://www.codewars.com/kata/5875b200d520904a04000003
// kata: Will there be enough space
// My solution:
function enough(cap, on, wait) {
  // your code here
  return cap >= on + wait ? 0: on + wait - cap
}