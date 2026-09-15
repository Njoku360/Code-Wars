// https://www.codewars.com/kata/56b29582461215098d00000f
// kata: Lario and Muigi Pipe Problem
// My solution:
function pipeFix(numbers){
  const min = Math.min(...numbers)
  const max = Math.max(...numbers)
  let sequentialNumbers = []
  for(let i = min; i <= max; i++){
    sequentialNumbers.push(i)
  }
  return sequentialNumbers
}