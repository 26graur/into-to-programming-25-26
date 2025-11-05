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

// // // queues are common uses for Arrays
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

// // we have an Arrays that's simulating a Euchre deck
// let deck = ["9", "9", "9", "9", "10", "10", "10", "10", "J", "J", "J", "J", "Q", "Q", "Q", "Q", "K","K","K","K"];
// // when shuffled the last value in the Array repressents the top card of the deck
// // so the first player will recieve the last card
// let first = []
// let i = deck.pop()
// first.push(i);
// console.log(deck);
// console.log(first);

// loops are frequently used in Arrays
// // let's say I want to print out the whole queue from before. this will be after we added Mrs. Breetz
// // a useful thing to know is the .length atribute
// console.log(NeedsHelp.length);
// i = 0;
// while(i < NeedsHelp.length){
//     console.log(NeedsHelp[i])
//     i += 1;
// }
// // let's say we want all the even numbers less than 100 and I already have a list up to 99
i =1; 
NumbersUnder100 = []
while (i < 100){
    NumbersUnder100.push(i)
    i += 1;
}
console.log(NumbersUnder100);
// make a new Array for even values
i = 0
let EvensUnder100 = []
while (i < NumbersUnder100.length){
    if (NumbersUnder100[i] % 2 == 0){
        EvensUnder100.push(NumbersUnder100[i])
    }
    i += 1;
}
console.log(EvensUnder100);
// for...of loops allow us to easily loop Arrays
// I want a new Array that is only multipules of 6. so my even number must also be divisible by 3
let MultipuleOf6Under100 = [];
for (let even of EvensUnder100){
if(even % 3 == 0){
    MultipuleOf6Under100.push(even);
}
}
console.log(MultipuleOf6Under100);

// you can also have multidimensional Arrays
// that is to say an Array that contains more Arrays
let StudentInfo = [["Grant", "27henng@badinhs.org", 1],["Nick", "26manginon@badinhs.org", 2],["Raynah", "26graur@badinhs.org", 3]]
console.log(StudentInfo);
// this will give the first Array
console.log(StudentInfo[0]);
// this will give the email for Nick
console.log(StudentInfo[1][1]);
// you can also console.log each value of an Array individually grouped by type
i = 0;
for (let student of StudentInfo){
    console.log(student[0])
}
// traditional approach
for(i = 0; i < StudentInfo.length; i += 1){
    console.log(StudentInfo[i][0])
}