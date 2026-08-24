// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
// kata: Mumbling
// My solution:
function accum(s) {
	// your code
  return s.split('').
  map((letter, index) => 
      letter.toUpperCase() + 
      letter.toLowerCase()
      .repeat(index)).join('-')
}