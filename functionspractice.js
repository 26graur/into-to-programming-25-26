// Write a function called multiply that takes 2 numbers and returns their product
// function multiply(a, b){
//     return a * b
// };
// console.log(multiply(2,2));


// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:
// function checkAge(age) { 
//       if (age > 18) { 
//            return true; 
//        } else { 
//            return confirm('Did parents allow you?');
// }
// }
// console.log(checkAge(14));
// Will the function work differently if else is removed?
// function checkAge(age) { 
//     if (age > 18) { 
//        return true;
// } 
// return confirm('Did parents allow you?');
// }
// console.log(checkAge(14));
// // They still act the same because without saying true it will say false
// Is there any difference in the behavior of these two variants?
// // There is no differance


 // Rewrite the previous function using either "?" or "||" so that you can 
 // do the whole function on one line
//  function checkAge(age){
//     (age > 18) ? console.log(true) : console.log(false)
//  };
//  console.log(checkAge(19));


 // Write a function min(a,b) which returns the least of two numbers a and b.
// function min(a,b){
//     if(a < b){
//         return a
//     } else {
//         return b
//     }
// };
// console.log(min(5,2));


// write a function pow(x, n) that returns x in power n
function pow(x, n){
    return x**n
}