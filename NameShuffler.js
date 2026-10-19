// We have a string as our parameter
// Trying to get a swap by which the first name is swapped with the last name
// For example "a b", its result comes out as "b a"
// first, we turn our string into an array
// Then we reverse
// finally, we join it back to a string

const nameShuffler = str => {
  const [firstName, lastName] = str.split(" ")
  return `${lastName} ${firstName}`
}

const nameShuffle = str => str.split(" ").reverse().join(" ")