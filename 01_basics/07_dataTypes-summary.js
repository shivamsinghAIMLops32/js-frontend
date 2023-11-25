// there are two types of data types :- 1. primitive 2. Non primitive

// Primtive :- 7 types (Call by value)
// String,Boolean,Number,Null,undefined,Symbol(unique for values),BigInt.

const score = 100;
const scoreValue = 205.33;
const isLoggedIn  = false;
const temp = null;
let level;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 329847942989120282872n;
console.log(typeof bigNumber);


// Reference type or Non Primitive (Call by reference)
// Array,Objects,Functions

// Array
const heros = ["shaktiman","naagraj","bheem"];
console.log(typeof heros);

// Objects :- key value pairs

let myObj = {
    name: "shivam",
    age:20,
}
let a =  myObj;
console.log(a.age);


// Function

const myFunction = function(){
  console.log("hello shivam");
}
myFunction();

