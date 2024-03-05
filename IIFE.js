// Immediately Invoked Function Expressions 

(function abc(){
    // this is named iife
    console.log("first funcion")
})() // ()<-this calls the function before it immediately
// using () right after the function gives errors, therefore, closed the function in paranthesis
;
((name) => {
    console.log(`use ';' before second function, ${name}`)
})('you')
