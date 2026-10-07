// https://www.codewars.com/kata/54da5a58ea159efa38000836
// kata: Find the Odd Integer
// My solution:
function findOdd(A) {
  //happy coding!
  const numSet = new Set() // create an empty set
  
  for(const num of A){
    if(numSet.has(num)){
      numSet.delete(num) // delete the number if it's already there
    } else {
      numSet.add(num) // Keep the number if it's not there
    }
  }
  return numSet.values().next().value
}