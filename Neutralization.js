// https://www.codewars.com/kata/65128732b5aff40032a3d8f0
// kata: Neutralization
// My solution:
// parameters = s1 and s2
//return = s1 + s2
/* example = string1 and string2 will be '+--' and '-++'
will be '000' */
/* pseudo = 
-Declare our fuction  and our parameters
- declare a variable with an empty string
- do a for loop to go through each string or parameter
-do an if condition inside the loop
- if - and - , we return - and add it to the empty string
- else if, + and +, we return '+' and add it to the empty string
-else + and -, we return '0' and add it to the empty string
*/
function neutralise(s1, s2) {
  let result = ''
  for (let i = 0; i < s1.length; i++) {
    let str1 = s1[i]
    let str2 = s2[i]
    
    if (str1 === '+' && str2 === '+'){
      result += '+'
    }else if (str1 === '-' && str2 === '-'){
      result += '-'
    }else {
      result += '0'
    }
  }
  return result
}