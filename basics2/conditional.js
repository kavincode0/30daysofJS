/* Scope, Conditionals
    const a = this cannot be changed
    let a = this can be changed
    if else is the same 
    *ternary op:- condition? true : false
    switch is the same
    
    for loop is the same, 
    while, do while are same

    => modernized for loops 
    let fruits = ["Apple", "Kiwi", "Banana"];

    1.fruits.forEach(function f(element)){
        console.log("fruit"+element)
    }

    2.elements: for of loop
    for(element of fruits){
        console.log("fruit"+element)
    }

    const greeting = "hello fish"
    for(letters of greeting){
        console.log(`${letters}`)
    }
    
    3.objects: for in loop
    for(key in emp){
        console.log('the ${key} of emp is ${emp[key]}')
    }
    */