// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334
// kata: Binary To Decimal
// My solution:
function binToDec(bin) {
  // TODO
  let decimal = 0
  for (let i = 0; i < bin.length; i++){
    const digit = bin[bin.length - 1 - i]
    
    if (digit === '1'){
      decimal += Math.pow(2, i)
    }
  }
  return decimal
}