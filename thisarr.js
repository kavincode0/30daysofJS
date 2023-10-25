const user = {
    username: "k",
    price: 100,

    greet: function() {
       const username = "bhalu"
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
// user.greet()
// user.username = "sammy"
// user.greet()

function bing(){
    let username = "k"
    console.log(this)
    console.log(this.username)//undefined
}

bing()

console.log(this)//empty parantheses