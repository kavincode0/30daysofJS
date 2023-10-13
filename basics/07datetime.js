// **************Dates****************

let myDate = new Date()
console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())

let myCreatedDate = new Date(2023, 9, 15, 3, 4, 5)//("2023-01-23")
console.log(myCreatedDate.toString())

console.log(Math.floor(Date.now()/1000));//date.now returns in ms

console.log(myDate.getMonth());
let map = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
console.log(map[myCreatedDate.getDay()]);

myDate.toLocaleDateString('default', {
    weekday: "narrow"
})