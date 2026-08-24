// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
// kata: Duplicate Encoder
// My solution:
function duplicateEncode(word){
  let result = ''
    // ...
  word = word.toLowerCase()
  for(let i = 0; i < word.length; i++){
    if(word.indexOf(word[i]) === word.lastIndexOf(word[i])){
      result += "("
    }else{
      result += ")"
    }
  }
  return result  
}

// DESKTOP-T6Q6U8G