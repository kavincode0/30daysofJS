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
// null => stadalone value (empty)
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

