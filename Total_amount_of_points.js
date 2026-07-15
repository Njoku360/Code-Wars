// https://www.codewars.com/kata/5bb904724c47249b10000131
// kata: Total_amount_of_points
// My solution:
function points(games) {
  let sum = 0
  for(let i = 0; i < games.length; i++){
    if(games[i][0] > games[i][2]){
      sum += 3
    }else if(games[i][0] === games[i][2]){
      sum += 1
    }
  }
  return sum
}