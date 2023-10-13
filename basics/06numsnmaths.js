bal1 = 100;
console.log(typeof bal1)

bal1 = bal1.toString()
console.log(typeof bal1)
console.log(bal1.length)

const num = 123.7439
console.log(num.toPrecision(2));
console.log(num.toFixed(1))//shows the precision value tenth, hunderedth, etc

const amt = 10000000
console.log(amt.toLocaleString('en-IN'))

// *****************Maths********************

console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(3.8));
console.log(Math.min(23, 39))
console.log(Math.random());//(0,1)