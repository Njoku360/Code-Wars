// https://www.codewars.com/kata/576757b1df89ecf5bd00073b
// kata: Build a Tower
// My solution:
function towerBuilder(nFloors) {
  // build here
  const pyramid = []
  for (let i = 1; i <= nFloors; i++){
    const spaces = ' '.repeat(nFloors - i)
    const stars = '*'.repeat(2 * i - 1)
    pyramid.push(spaces + stars + spaces)
  }
  return pyramid
}