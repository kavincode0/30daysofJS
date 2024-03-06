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
