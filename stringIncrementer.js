// Paramaters - string
// Return - string with a number attached to it, that's actually being incremented
// Example - boat = boat1, shoe2 = shoe3
// Pseudo Code

const incrementString = strng => {
  let numberIndex = strng.length
  
//   Move backward from the end to find where the number starts
  while (numberIndex > 0 && strng[numberIndex - 1] >= '0' && strng[numberIndex - 1] <= '9'){
    numberIndex -= 1
  }
  
// Seperate the text portion and the number portion
  const textPart = strng.slice(0, numberIndex)
  const numberPart = strng.slice(numberIndex)
  
//   Handle the fallback if there were no digits at the end
  if (numberPart === ''){
    return strng + '1'
  }
  
//   Increment the number while preserving leading zeros
  const incremented = (BigInt(numberPart) + 1n).toString()
  const paddedNumber = incremented.padStart(numberPart.length, '0')
  
// Combine and return
  return textPart + paddedNumber
}