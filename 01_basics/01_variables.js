const accountId = 12873;
let accountEmail = 'shivam@gmail.com';
var accountPassword = "387732";
accountCity = 'noida';
let accountState;

// accountId = 2;  *not work cause (const) var can't change.

accountEmail = "shivam287@gmail.com";
accountPassword ="7368";
console.log(accountEmail);

/*
Prefer not to use var 
because of issue in block scope and funtional scope.
**use let and const moreover.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
