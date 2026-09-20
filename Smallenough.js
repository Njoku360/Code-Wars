// https://www.codewars.com/kata/57cc981a58da9e302a000214
// kata: Small enough?-Beginner
// My solution:
const smallEnough = function(a, limit){
  for(const element of a){
    if(element > limit){
      return false
    }
  }
  return true
}