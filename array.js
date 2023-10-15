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

 console.log(myArr.includes(3))
 console.log(myArr.indexOf(3))

 console.log(typeof myArr);
 
 const newArr = myArr.join();
 console.log(typeof newArr);

//  slice(manipulates the original array) and splice 
const smpArr = [1, 2, 3, 4, 5]
console.log("original: ", smpArr)

const sliceArr = smpArr.slice(1, 3)
console.log("slice ", sliceArr)

const spliceArr = smpArr.splice(1, 3)
console.log("splice: ", spliceArr)
console.log("original to after splice: ", smpArr)

dc = ["black adam", "flash", "blue beetle"]
marvel = ["thor", "loki", "asgard"]
console.log(marvel.push(dc))