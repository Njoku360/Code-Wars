// https://www.codewars.com/kata/523f5d21c841566fde000009
// kata: Array.diff
// My solution:
const arrayDiff = (a, b) => {
  const result = [...a].filter(n => !b.includes(n))
  return result
}