const name = "kavya"
const repocount = 10

console.log(`hey I'm ${name} and my repo count is ${repocount}`)

const game = new String('dota')//browser functionaliy breaks the string in letters
console.log(game.toUpperCase())
console.log(game.length)

// .charAt(x)
// .indexOf('t')
// .substring(0, 4)
// .slice(-1, 2)//starts from reverse if -ve
// .trim()//whitespace characters
// .includes(x)
// .split('-')
const url = "https://novice.com/uvw-xyz";
console.log(url.replace('-', '2-2'));