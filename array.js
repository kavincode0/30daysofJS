// resizable, mixed, prototype access in browser
const myArr = [3, 4, 5, "k"];

//push, pop
myArr.push(2)
console.log(myArr)
myArr.pop()
console.log(myArr)

// shift, unshift
myArr.unshift(9)
console.log(myArr)
myArr.shift()
console.log(myArr)

// includes, indexOf
 console.log(myArr.includes(3))
 console.log(myArr.indexOf(3))

 console.log(typeof myArr);
 
//  join converts array to string
 const newArr = myArr.join();
 console.log(typeof newArr);

//  slice and splice(manipulates the original array, removes the range of values spliced) 
const smpArr = [0, 1, 2, 3, 4, 5]
console.log("original: ", smpArr)

const sliceArr = smpArr.slice(1, 3)
console.log("slice ", sliceArr)

const spliceArr = smpArr.splice(1, 3)
console.log("splice: ", spliceArr)
console.log("original to after splice: ", smpArr)

// pushing array in array as a single object
const dc = ["black adam", "flash", "blue beetle"]
const marvel = ["thor", "loki", "asgard"]
console.log(marvel.push(dc))//no. of elements in marvel
console.log(marvel)

// combining to arrays, 1. concat
const allheroes = marvel.concat(dc)//combines two arrays
console.log(allheroes)

//2.spread
const all_new_heroes = [...marvel, ...dc];
console.log(all_new_heroes);

// flat(depth) divides any array if present into discrete elements, depth range to infinity
const discreteArr = marvel.flat(1)
console.log(discreteArr)

// makes array from given element
console.log(Array.isArray(24))
console.log(Array.from(24))
console.log(Array.from("23"))

// makes array of values of given elements
let a = 1;
let b = 2; 
let c = 3;
console.log(Array.of(a, b, c))