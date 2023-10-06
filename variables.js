const accountId = 123203;
let accountEmail = 'k@gmail.com';
var accountPass = '1234';
accountCity = "Lko";
let accountState;
// accountId = 32312;
// console.log(accountId);//analysed via nodejs and gives error

accountEmail = 'ks@gmail.com';
accountPass = '2345';
accountCity = 'LKO';

console.table([accountId, accountEmail, accountPass, accountCity, accountState]);

// 1. {curly braces are scope, var goes out of scope whereas let works for the scope}
// therefore, prefer not use var because of issue in block and functional scope 




