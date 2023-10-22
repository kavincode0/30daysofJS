// destructuring of objects

const card = {
    name: 'k',
    course: 'cs',
    idNumber: 12345
}

const {idNumber: id} = card
// console.log(idNumber)
console.log(id)

// destructuring in React
// const navbar = ({company}) =>{
    // curly braces shows the destructuring
// }
// navbar(company = "comp");


// if the object is nameless and it can be accepted in json object format when key in form of string or in array format also
// {
//     "name": "k",
//     "id": "12345"
// }

// [
//     {},
//     {}
// ]


