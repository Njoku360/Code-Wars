//https://www.codewars.com/kata/546f922b54af40e1e90001da
// kata: Replace with alphabet position
// My solution
function alphabetPosition(text) {
  return text.toLowerCase().split('').filter(l => l >= 'a' && l <= 'z').map(l => l.charCodeAt(0) - 96).join(' ')
}

function likes(names) {
  const count = names.length;

  switch (count) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}