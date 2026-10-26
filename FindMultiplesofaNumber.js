// Parameters - n and it's limit for the multiples of n
// Return - Returning an array of numbers that are the multiples of n
// Examples - n = 3 and it's multiples' limit is 10, return [3, 6, 9]
/* Pseudo Code -
create our function
write our parameters
declare an empty array
do a for loop to loop through each number between n and its limit to check for the multiples
Check multiples by dividing each number by n = 0 using modulus */

function findMultiples(integer, limit) {
  //your code here
  let arr = []
  for (let i = integer; i <= limit; i++){
    if (i % integer === 0){
      arr.push(i)
    }
  }
  return arr
}