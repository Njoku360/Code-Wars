// Parameters = array of numbers
// Return = new array of squared numbers
// Example = [2, 3, 4] would return [4, 9, 16]
/* Pseudocode 
* Declare a function
* name the parameter
* use the array method .map to return new array of numbers that are squared and use the Number method to change a number form a string to an integer
*/
function newArray(arr) {
   return arr.map(n => Number(n) ** 2)
}