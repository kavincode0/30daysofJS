"use strict"; //treat all code as newer JS version

// alert(3+3) we are using nodejs, this syntax works on browser
// ecma: js standard documentation

// let name = "k"
// let age = 20
// let isLoggedIn = false

// #Primitive Datatypes(7)
// number => 2 to power 53
// BigInt
// string => ""
// Boolean
// null => standalone value (empty)
// undefined
// symbol => unique
const bigNumber = 39479287402343703n  //bigInt
console.log(typeof null); //object
console.log(typeof undefined); //undefined


// #Reference (Non-Primitive)
// Object, Array, Functions
const heroes = ["loki", "daredevil"];//array
let myObj = {
    name: "who",
    age: 38
}//object
const myfunc = function(){
    console.log("hello world");
}
console.log(typeof bigNumber)

// ***************Stack and Heap******************
// Stack(Primitive)->copy of the value, Heap(Non-Primitive)->reference of the value
console.log()

let prim1 = "Primitive data is stored in stack"
let prim2 = prim1
prim2 = "if stored in new variable, the original variable's value does not change"

console.log(prim1)
console.log(prim2)

let nprim1 = {
    val: "Non-primitive data is stored in heap"
}
let nprim2 = nprim1
nprim2.val = "The original data has changed because heap has new variable as reference variable"

console.log()
console.log(nprim1.val)
console.log(nprim2.val)



