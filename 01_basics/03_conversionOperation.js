// we use Capital letter for conversion for ex {Number, String, Float} etc.

let score = 44;
let level = "2nd";
const playerName = "ShivamXpro";

console.log(typeof score);
console.log(typeof playerName);

let valueInNumber = Number(level);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// type NULL

let scored = null;
console.log(scored);

scoring = Number(scored);
console.log(scoring);

finalScore = String(scored);
console.log(finalScore);


// Boolean  if changed in Number or int It'll be 1 or 0.
let result = true;

finalResult = Number(result);
console.log(finalResult);

// If a string is converted in number then result will be NaN
 let nme = "shivam";
 console.log(typeof nme);
 naam = Number(nme);
 console.log(naam);
 // "33" => 33
 // "33abc" => NaN
 // true => 1; false => 0;


// {change from number to boolean}
let isSignUp = 1;

let isSignedUp = Boolean(isSignUp);
console.log(isSignedUp);

// 1 => true; or 0 => false;
// "" => false;
// "shivam" => true;

let someNumber = 784;

let boolNum = String(someNumber);
console.log(boolNum);
console.log(typeof boolNum);

// 873 => 873 which is of string type.