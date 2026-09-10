// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
// kata: Abbreviate a two word name
// My solution
function abbrevName(name){
    // code away
    let n = name.split(' ').map(word => word[0].toUpperCase()).join('.')
    return n
}