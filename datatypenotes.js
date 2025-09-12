// these are notes on date types and conditionals in javascript


// javascripts is a dynamically typed language.   C/java/C++ are statically typed.
// in a dynamiaclly typed 

// // example
let message = "hello";
// message = 123;`

// Number:
// let n = 5;                  // "int" is an integer
// n = 254.23589752378         // "float" floating point number (decimal)
// // javascript lumps "int" and "float" together

// there are some special values included in the number data type
// ininity, -infinity, NaN, (NaN is "Not a Number")
// mathmatical operations in JavaScript is "safe", you can do anything

// BigInt, Big Intigers, represents big intigers
// "number" as a datatype can't sore a value larger that (2^53 - 1) = 9,007,199,254,740,991
// const sampleBigInt = 123456789123456789123456789n;
// final "n" indicates that it's a BigInt

// String:
// a string is text.
// there are three ways to produce a string in JavaScript which are slightly differant.
// let string1 = 'this is a string'
// let string2 = "this is also a string"
// you usually select what string notation you're using based on the content of your string
// for example:
// let dialogue = "the man yelled, "here we go"" (won't work)
// let diologue = 'the man yelled, "here we go"' (will work)
// functionally single and double quotas are the same. the third method of righting strings is fudementally differant
// for example:
let name = "Raynah";
alert(`Hello, ${name}!`);
// backticks (`) allow you to embed code into the string
// console.log(`3 + 4 is equal to ${3 + 4}`);

// char doesn't exist in JavaScript but does exist in C and Java. 
// It's basically a string of length 1.

// Boolean Values:
// named for George Boolean
// has two values: True and False
// let nameFieldValid = true;      // the person imput a valid name
// let ageFieldValue = false;      // the person did not imput a valid age
// console.log(3 < 1);     // will return false since it's inacurate

//null:
// contains only one value: "null"
// means nothing, empty, value unknown
// let age = null;
// not to be confused with 'undefined", which means that a value has not been assigned
// let fish;       // will come back as undefined

// objects and symbols:
// objects can hold complex date structures
// symbols are used to identify objects

// vocab distinction: functions vs. methods. Functions are genartic. Methods are bound to a specific datatype
// functions are usually called by stating the name of the function and what you want it applied to. 
// A method usually follows what it's being applied to.

// string methods:
// Length: technecally a property, not strictly a method.
// let text = "bvcfrtyujnbv";
// console.log(text.length)
// ways to extract characters from a string:
// .at():                            // prefered and most useful
text = "Stevie T. Badin";
// console.log(text.charAt(3));
// console.log(text.at(-3));
// charCodeAt():                    // returns the UTF-16 code of the character at the specified index
// console.log(text.charCodeAt(3));
//.concat:                          // stands for concatination. allows you to concatinate two or more strings
// let text1 = "hello";
// let text2 = "Stevie";
// text3 = text1.concat(" ", text2);
// console.log(text3);
// text4 = text1 + " " + text2;
// console.log(text4);

// if you want to extract a sub-string you can use 3 methods.
// slice():                     // returns a strin g that starts from the given index and ends before the second index
// console.log(text.slice(3, 8));
// if you leave out the second value you will get the rest of the string
// you can also usd negetive integers
// console.log(text.slice(-5))

// [] this is a notation that allows you to use something similar to .at

// .substring();
// similar to slice but start and end values that are less than 0 are treated as zero
// .substr();           // where the second number was how long you want the string to be
// this is depricated, so don't use it

// .toUpperCase()
console.log(text.toUpperCase())
// .toLowerCase()
console.log(text.toLowerCase())

text = "                            Stevie T. Badin"
console.log(text);

// .trim()
// used to remove white space from both ends of a string
console.log(text.trim());
// can also do .trimStart and .trimEnd