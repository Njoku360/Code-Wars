// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
// kata: Validate a pin
// My solution:
function validatePIN (pin) {
  //return true or false
  pin = pin.split('')
  const findNaN = pin.find(element => !(parseInt(element) >= 0))
  if((pin.length === 4 || pin.length === 6) && !findNaN){
    return true
  }else{
    return false
  }
}