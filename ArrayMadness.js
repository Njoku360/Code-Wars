// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1
// kata: SpeedCode #2 - Array Madness
// My solution:
// Parameters = a and b
// Return = sum of the squares of each elements in a > sum of the cubes of each elements in b
// Example : a=[2, 4] and b = [1, 3], return if 20 > 27. False
/* Pseudo code
* Declare our function and put two parameters
* Declare two empty variables A and B
* Run a for loop for each of the arrays
* do the square for each element in array a and push it to empty array A
* do the square for each element in array b and push it to empty array B
* use the reduction method for each array to sum up
* We do a condition returning 'true' if sum of squares of each elemnts in array a > sum of cubes of each elemnt in array b
*/
const arrayMadness = (a, b) => {
   let arrayA = []
   let arrayB = []
   for(let i = 0; i < a.length; i++){
     let A = Math.pow(a[i], 2)
     arrayA.push(A)
   }
   let rA = arrayA.reduce((acc, cur) => (acc + cur), 0)

    for(let i = 0; i < b.length; i++){
      let B = Math.pow(b[i], 3)
      arrayB.push(B)
    }
    let rB = arrayB.reduce((acc, cur) => (acc + cur), 0)
    return rA > rB
   
}