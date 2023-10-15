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
console.log(typeof [sym])
