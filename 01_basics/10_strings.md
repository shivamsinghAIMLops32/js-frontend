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
console.log(newPlayer.charAt(3));
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

### **trimming and replace string**
 ```js
 const url = "  shivam   ";
console.log(url.trim());

 const newUrl = "you are promoted"
console.log(newUrl.replace("shivam","shivamOp"));
 ```