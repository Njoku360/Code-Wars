// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
// kata: Sort Numbers
// My solution:
function solution(nums){
  if(nums !== null){
    return nums.sort((a, b) => a - b)
  }else{
    return []
  }
}