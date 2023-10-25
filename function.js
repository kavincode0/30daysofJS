function sayMyName(){//no parameters
    console.log("k")
}

// sayMyName   (reference of function)
sayMyName()//no value or argument

function Price(...num){//... is rest operator and represents multivalued function here
    return num
}

console.log(Price(23, 43, 53))
