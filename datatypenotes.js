// these are notes on date types and conditionals in javascript


// javascripts is a dynamically typed language.   C/java/C++ are statically typed.
// in a dynamiaclly typed 

// // example
// let message = "hello";
// message = 123;`

// Number
// let n = 5;                  // "int" is an integer
// n = 254.23589752378         // "float" floating point number (decimal)
// // javascript lumps "int" and "float" together

// there are some special values included in the number data type
// ininity, -infinity, NaN, (NaN is "Not a Number")
// mathmatical operations in JavaScript is "safe", you can do anything

// BigInt, Big Intigers, represents big intigers
// "number" as a datatype can't sore a value larger that (2^53 - 1) = 9,007,199,254,740,991
const sampleBigInt = 123456789123456789123456789n;
// final "n" indicates that it's a BigInt