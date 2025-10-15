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
// let sum = (a,b) => a + b;
// console.log(sum(3,5));
// this is functionally equivillent to 
// let sum = function(a,b){
//     return a+b;
// };

// you can also use arrow functions to creat anonymous functions
// let age = prompt("How old are you?");
// let welcome = (age < 18) ?
//     () => alert("sup?") :
//     () => alert("hello")



// Loops run a chunk of code repeatedly while a certain condition is true. 
// while loop:
// make a fibinacci genorator
// let i = 1; // steps to do
// let a = 0;
// let b = 1;
// let c
// // 10th step of the sequence
// while(i < 10){
//     c = a + b;
//     a = b;
//     b = c;
//     i = i + 1; // can also be i += 1
//     console.log(c)
// };

// make a fibinacci sequence up to 150
// let a = 0;
// let b = 1;
// let c = 0;
// console.log(a);
// console.log(b);
// while(c < 150){
//     c = a + b;
//     a = b;
//     b = c;
//     if(c < 150){
//         console.log(c)
//     }
// };
    // or
// let a = 0;
// let b = 1;
// let c = 0;
// console.log(a);
// console.log(b);
// while(a + b < 150){
//     c = a + b;
//     a = b;
//     b = c;
//     console.log(c)
// };
// using "if" to control the console.log allows you to stop the last result from printing, but it still runs the loop
// changing the loop condition to "a + b < 150" stops the last loop from running

// another form if while is "do...while" loop
// let i = 0;
// do {
//     console.log(i);
//     i = i +1;
// } while (i < 3);
// do...while loop will always run at least once


// examples of password verification using loops:
// traditional loop         // password: Badin
// let password = prompt("please enter your password");
// while(password != "Badin"){
//     password = prompt("Incorrect. Please enter your password")
// }
// console.log("Access granted");
// do...while version
// let password;
// do{
//     let password = prompt("Please enter your password");
// } while (password != "Badin");
// console.log("Access granted");


// let a = 0;
// let b = 1;
// let c;
// console.log(a);
// console.log(b);
// for(let i = 0; i < 8; i = i +1){
//     c = a + b;
//     a = b;
//     b = c;
//     i = i + 1;
//     console.log(c)
// };

// break and continue:
// advanced loop management
// "Break" will escape from the loop completely
// "Continue" will skip the end of the current iteration and go back to the top of the loop
    // addition only calutaor to keep a running tally (break):
// let sum = 0;
// while(true){
//     let value = +prompt("Enter a number");
//     if (!value){
//         break;
//     }
//     sum += value;
//     console.log("current value is", sum);
// }
// console.log("Program terminated");
    //a code that prints only even numbers (continue):
// for(let i = 0; i < 31; i += 1){
//     if (i % 2 == 1){
//         continue;
//     }
//     console.log(i);
// }




// make the console say the numbers 1 through 30
// write an "if" statement so that multipules of 3 say "Fizz" instead
// write an "if" statement so that multipules of 5 say "Buzz" instead
// write an "if" statement so that multipules of 3 and 5 say "FizzBuzz" instead
let a = 1;
while(a <= 30){
    if(a % 3 == 0 && a % 5 == 0){
        console.log("FizzBuzz");
    } else if(a % 5 == 0){
        console.log("Buzz");
    } else if(a % 3 == 0){
        console.log("Fizz");
    } else {
        console.log(a);
    }
    a += 1;
};