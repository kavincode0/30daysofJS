// singleton
// object literals
const sym = Symbol("kavis")
const age = Number(18)
const JsUser = {
    name: "k",
    age: 18, 
    email: "nok@email.com",
    [sym]: "kavIS"
}
console.log(typeof JsUser["age"])
// syntax for a symbol, representation of symbol
console.log(typeof JsUser[sym]);

// to lock or freeze all values in object
// Object.freeze(JsUser)

// function
JsUser.greeting = function(){
    console.log(`Hello have a nice day, ${this.name}`)//string interpolation using backticks
}
console.log(JsUser.greeting());

