// https://www.codewars.com/kata/5963c18ecb97be020b0000a2
// kata: Take the Derivative
// My solution:
/* Parameters = coefficient and the exponent of a number
Return = Multiplication of the two parameters and the exponent with 1 from it
Example = 3, 5 will be 15x^4
Pseudo code = declare our function
write our two parameters as the coefficient and the parameters
mutiply the both and put them in a literal string with 1 being subtracted from the exponent 
Return it */
// function derive(coefficient,exponent) {
  
// }

const derive = (coefficient, exponent) => {
  let multiPly = coefficient * exponent
  return `${multiPly}x^${exponent - 1}`
}