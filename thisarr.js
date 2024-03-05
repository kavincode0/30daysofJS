const user = {
    username: "k",
    price: 100,

    greet: function() {
    //    username = "bhalu"
        console.log(`${this.username}, welcome to website`);//this here refers to current context
        console.log(this)
    }
}
// user.greet()
// user.username = "sammy"//context changed 
// user.greet()

//  #######################Note##################
// browser global object is windows object

// using this operator in regular function 
const bing1 = function(){
    let username = "k"
    console.log(this)
    // console.log(this.username)//undefined, because this only works when in object, but not in only function


// using this operator in arrow function 
}
const bing2 = () =>{
    let username = "k"
    console.log(this)
    // console.log(this.username)//undefined
}
console.log("Before using arrow function | printing this")
bing1()
console.log()

console.log("After using arrow function | printing this")
bing2()

// console.log(this)//empty parantheses


// #################### Arrow function ##########################

// explicit return
p = (a, b) =>{
    return a/b
}
console.log(p(30, 5))

// implicit return(in react)
q = (a, b) => (a/b) // when returning an object you need to specify => ({user: 'k'}) like this
console.log(q(30, 5))