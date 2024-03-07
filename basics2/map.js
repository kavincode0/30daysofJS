const map = new Map()
map.set('bottle', 'cap')
map.set('chips', 'choco')

for([key, value] of map){
    console.log(key,':', value)
}
for(key of map){
    console.log(key)
}
// this does not work for objects, for in loop is for objects 

// important properties of for each loop
const coding = ['js', 'cpp', 'java', 'python']
val = coding.forEach((item) =>{
    return item;//undefined
})
console.log(val)

val = coding.filter((item) => item == 'js')
console.log(val)

// wrong val = coding.filter((item) => {item == "js"}), use return in this case `return item == "js"`
const num = [1, 2, 3, 4, 5]
const n = num.map((n) => n+10)
console.log(n)

// chaining 
const n2 =  n.map((n2) => n2*2)
             .map((n2) => n2+5)
             .filter((n2) => n2 >= 31)//only works incase of comparition not incase basic opereations
console.log(n2)

// reduce function
shoppingCart = [
    {
     course: 'js', 
     price: 10000
    },
    {
     course: 'data science', 
     price: 12000
    },
    {
     course: 'cloud', 
     price: 15000
    }
]
const totalprice = shoppingCart.reduce((acc, item) => acc+item.price, 0)
console.log(totalprice)