// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
// kata: Remove duplicates from list
// My solution:
function distinct(a) {
  return [...new Set(a)];
}

// const distinct = a => {
//   let nonDuplicate = a.filter((item, index, array) => array.indexOf(item) === index && array.lastIndexOf(item) === index )
//   return nonDuplicate
// }
