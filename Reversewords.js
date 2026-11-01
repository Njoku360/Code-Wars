// Parameters = str is a string
// Return = Words reversed
// Example = "I am a boy", return "boy a am I"
/* Pseudo code =
*Declare our function with str as our parameter
* Turn the str into an array of words
* Reverse the words
* Turn back it into a str by joining the words with a space */
function reverseWords(str){
  return str.split(" ").reverse().join(" ")
}