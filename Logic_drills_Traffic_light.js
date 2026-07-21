// https://www.codewars.com/kata/58649884a1659ed6cb000072
// kata: Thinkful-Logic Drills: Traffic light
// My solution:
function updateLight(current) {
  //your code here!
  if (current === 'green'){
    return current.replace('green', 'yellow')
  }else if(current === 'yellow'){
    return current.replace('yellow', 'red')
  }else{
    return current.replace('red', 'green')
  }
}