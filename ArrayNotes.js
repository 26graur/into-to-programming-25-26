// Arrays store groups of values. like a variable and string mixed together
// // there are two was to declare an Array
// let arr1 = new Array();
// let arr2 = [];
// // you can also initialize the Array with values
// let fruits = ["Apples", "Cantalopes", "Strawberries"];
// console.log(fruits[1]); // will console.log Cantalopes
// // I know only want red fruits
// fruits[1] = "Cherries";
// console.log(fruits);
// console.log(fruits[1]);

// // to use negative indices use the .at method
// console.log(fruits.at(-1));

// commons methods for Arrays
// // .push() :
// adds an element to the end
// // .shift() :
// removes an element from the beginning and moves all elements up one slot

// // queues are common uses for Arrays
// let NeedsHelp = ["Grant", "Nick", "Raynah", "Mr. Smith"];
// console.log(NeedsHelp);
// // someone new emails for help
// NeedsHelp.push("Mrs. Breetz");
// console.log(NeedsHelp);
// // the first person gets help
// console.log(NeedsHelp.shift());
// console.log(NeedsHelp);

// .pop() ;
// a method we can use for stacks instead of queues
// returns the last value and removes it from the Array

// we have an Arrays that's simulating a Euchre deck
let deck = ["9", "9", "9", "9", "10", "10", "10", "10", "J", "J", "J", "J", "Q", "Q", "Q", "Q", "K","K","K","K"];
// when shuffled the last value in the Array repressents the top card of the deck
// so the first player will recieve the last card
let first = []
let i = deck.pop()
first.push(i);
console.log(deck);
console.log(first);

// loops are frequently used in Arrays