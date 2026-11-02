// https://www.codewars.com/kata/5ad0d8356165e63c140014d4
// kata: user1577906, madhom, bja92, JurgenBlitz, Arcanee, Ebolla, Theplay4play, Mohammede-Q96, SirajNajjar, Elena111 (+ 547)
// My solution:
function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) return 100;
  if(exam > 75 & projects >= 5) return 90;
  if(exam > 50 & projects >= 2) return 75;
  return 0;
}