/* parameters = x as an array
return = 'publish' || 'I smell a series!' || 'Fail'
example = arr  return 'publish' 'I smell a series' 'Fail'
pseudo code ->
* declare a function with an array called x
* we do a for loop to loop through the array
* we declare a variable count to count the 'good' ideas
* we do an if condition inside indicating if there's one or two good ideas, return 'publish'
* else if there are more than two, we return 'I smell a series'
* if there's none, we return 'Fail'
*/
function well(x){
  let countgood = 0
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good'){
      countgood++
    }
  }
  if (countgood > 2){
    return 'I smell a series!'
  }
  if (countgood > 0) {
    return 'Publish!'
  }
  return 'Fail!'
}