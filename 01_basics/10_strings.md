> #### This file contains strings guide
>
>> - Strings are very much useful in programming and very frequent.
> **where to use string ?**
>
>>  *Strings* is used for storing **sequence of charaters**.

##### strings are mutable or immutable
 - [x] immutable
 - [] mutable

##### strings objects are mutable or immutable
 - [] immutable
 - [x] mutable
-----------------------------------------------------------------------------
> some operations over string

### ** string declaration *** ##
```js
const player = "shivam";
const newPlayer = new String("shivaOP");
// to get the length of string
console.log(player.length());
```

### **character access**
 ```js
console.log(newPlayer.charAt(3);
 ```

### **character access at particular idx which get converted to integer code**
 ```js
console.log(newPlayer.charCodeAt(3);
 ```

### **for uppercasing or lowercasing**
 ```js
console.log(newPlayer.toUpperCase());
console.log(newPlayer.toLowerCase());
 ```

### **some useful proto type or function of string**
 ```js
 const player1 = "shivam";
 const message = "you are promoted"
console.log(newPlayer.bold);

console.log(newPlayer.concat(${message}));
 ```

### **Trimming string**
 ```js
 const url = "  shivam   ";
console.log(url.trim());
```
### ** Replace string**
 const newUrl = "shivamSingh2"
console.log(newUrl.replace("shivam","shivamOp"));
 ```
### **checking if ***if some part present in string or not*** string**
 ```js
 const playerUrl = "https://zany-space-memory-xj6q5.github.dev/";
console.log(url.includes(github.dev));
 ```
### *** Index of *any charater* ***
 ```js 
 const newName = "shivam singh";
 console.log(formerName.indexOf('g'));
 ```

 ### *** slicing ***
 ```js 
 const formerName = "shivam singh";
 console.log(formerName.slice(-8,3));
 console.log(formerName.slice(8,3));
 ```

 ### *** Substring ***
 ```js 
 const formerName = "shivam singh";
 console.log(formerName.substring(-8,3));  // it will work as (8,3)
 console.log(formerName.slice(8,3));
 ```

 ### *** toString **for converting an var to string** ***
 ```js
 const grade = "9";
 grade.toString();
 console.log(typeOf grade);