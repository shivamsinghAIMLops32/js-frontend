// Stack (Primitive)   && Heap (Non-primitive or Reference type)

let userName = "Shivam singh";
let newUserName = userName;
console.log(newUserName);
newUserName = "sivamsingh";
console.log(userName);
console.log(newUserName);

// object :- if change in copy then change in original cause both refre the same object instance in heap
let userOne= {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;
userTwo.email = "user2@email.com";
userTwo.upi = "user2@ybl";

console.log(userOne);
console.log(userTwo);