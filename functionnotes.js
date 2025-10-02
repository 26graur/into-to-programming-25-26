//Functions are blocks of code where you can write the framework and then execute
// it later with specific conditions.  They consist of a function name, parameters
// and then the code itself.  You "call" the function later and "pass" it arguments.

// function favoriteAnimal(animal){
   
//     return animal + " is my favorite animal"
// };

// favoriteAnimal("Panda");

// console.log(favoriteAnimal("Panda"));

// function favoriteAnimal2(animal){
//     console.log(animal + " is my favorite animal");
// }

// favoriteAnimal2("Hellbender")


// using function return as an error code.  Let's say that we want to do some math
// with a function, but we expect a certain kind of value.  For example we're going
// to write a function to find the slope of a line given two points, and we know
// that this slope should always be positive.  m = (y2 - y1)/(x2 - x1);

// function slopeFinder(x1, y1, x2, y2){
//     let m = (y2 - y1) / (x2 - x1);
//     if (m <= 0){
//         console.log("Try again");
//         return("Value was less than or equal to 0");
//     } else {
//         console.log("m = " + m);
//         return(m);
//     }
// }

// slopeFinder(5, 5, 0, 10)  // said try again
// console.log(slopeFinder(5, 5, 0, 10))  // function returns Value message.

// slopeFinder(0, 5, 5, 10);

// let's use this result to finish a y = mx + b math problem.
// console.log(y = slopeFinder(0, 5, 5, 10) * 3 + 1); // NaN

// console.log(slopeFinder(0, 5, 5, 10)); //undefined.  To fix, we add "return(m)" to our function

// consol.log(q)        // this gives an error beacuse q has only been defined within a function

// local scope: within a single function
// Global scope: within the entire program
// functions can usually pull from the global scope into a loacl scope
// programs cannot pull from the local scope. you need to return the values instead
// let x = 5;
// function fish(type){
//     let i = 1;
//     console.log(type + x)
// }
// fish("cod");
// console.log(i);

// funtions are reallt useful when you have a block of code you need to reuse in differant places or with differant settings.
// what we've done up to here is function declarations. you can also use function expressions.
// let SayHi = function(){
//     alert('hello')
// };
// console.log(SayHi);
// SayHi();
// function declaration will let you use a function before it is defined
// function expressions will only work after a function has been defined

// another way to create functions isn the "arrow function"
// arrow functions are essentially compact function expressions
let sum = (a,b) => a + b;
console.log(sum(3,5));
// this is functionally equivillent to 
let sum = function(a,b){
    return a+b;
};