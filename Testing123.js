// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
// kata: Testing 1-2-3
// My solution:
var number=function(array){
  //your awesome code here
  let arr = []
  
  for(let i = 0; i < array.length; i++){
    arr.push (`${i + 1}: ${array[i]}`)
  }
  return arr
}