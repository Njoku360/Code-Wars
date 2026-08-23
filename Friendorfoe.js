// https://www.codewars.com/kata/55b42574ff091733d900002f
// kata: Friend or Foe
// My solution:
function friend(friends){
  let outPut = []
  //your code here
  friends.forEach(f => {
    if(f.length === 4){
      outPut.push(f)
    }
  })
  return outPut
}