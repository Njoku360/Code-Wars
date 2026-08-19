// https://www.codewars.com/kata/523f5d21c841566fde000009
// kata: Array.diff
// My solution:
const arrayDiff = (a, b) => {
  const result = [...a].filter(n => !b.includes(n))
  return result
}

github_pat_11BZGIGBY044tzwPCOgHOB_fFC8ZtkVcPWmHKjMnTULHpZvKkKIcFSClxc3MKIvVr1NOB7UFDWDf0ElNI