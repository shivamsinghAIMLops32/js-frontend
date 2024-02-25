const name = "shivam";
const repoCount = 30;

// console.log(name + ""+ repoCount);

// use STRING interpolation by using backtick(``).  --> as an placeholder

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);


// String declaration another method

const playerName = new String("shivaOp");
console.log(`The player name is ${playerName}`);

// STRING FUNCTION

const newPlayer = "john cena";

console.log(newPlayer[3]);       // accessing the value from string
// console.log(newPlayer.__proto__.length())

console.log(newPlayer.length);
console.log(newPlayer.toUpperCase());

console.log(newPlayer.charAt(8));
console.log(newPlayer.indexOf('o'));
console.log(newPlayer.indexOf('l'));

// Slice  :- in substring we have to give starting index and ending index which is not included.
const newString = newPlayer.substring(0, 7);
console.log(newString);

// in case of slice it can take negative values as it works from last of string
const anotherString = newPlayer.slice(-7, 5);
console.log(anotherString);

// TRIM and REPLACE method

// trim get used to ignore unwanted spaces in forms and etc.
const newStringOne = "  shivam  ";
console.log(newStringOne);
console.log(newStringOne.trim());

// Replace 
// used to replace by selecting a value and replace it with another string.
const url = "https://shivam.com/shivam%70singh";
// url.replace('%70', '-')
console.log(url.replace('%70', '-'));

// how to know whether a specific keyword exist or not. {ANS true/false}
console.log(url.includes("shivam"));
console.log(url.includes("jumbo"));

// convert String in array based on something.
// METHOD :- split(separator , limit)
let greeting = "namaskar";
console.log(greeting.split("-"));

