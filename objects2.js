// const tinderUser = new Object()//singleton object
const tinderUser = {}//non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// nesting of objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kavya",
            lastname: "sharma"
        }
    }
}
console.log(regularUser.fullname.userfullname.lastname)

// combining two objects 
const obj1 = {1: "a", 2: "hey"}
const obj2 = {3: "b", 4: "n"}

// 1. using assign
// const obj3 = Object.assign({}, obj1, obj2, regularUser)
// console.log(obj3);

// 2.spread operator(used more often)
const obj3 = {...obj1, ...obj2}
console.log(obj3)

// array of objects is obtained from a db
const users = [
    {
        id: 1, 
        email: "h@gmail.com"
    },
    {
        id: 2, 
        email: "k@gmail.com"
    }
]

// access objects in users
console.log(users[1].email)


console.log(Object.keys(tinderUser));//array is obtained, can use loop, etc. 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//2d array is obtained

// to check if property/key exist in the object
console.log(tinderUser.hasOwnProperty('hello'))
