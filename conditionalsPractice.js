// notes and practice for conditionals

// Conditionsals
// A way to control whether a block of code executes based on whether prior conditions are met.

// console.log(Date());
// greet the user with "good morning", "good afternoon", or "good evening"
// morning: before noon
// afternoon: before 6pm
// night: 6pm (18) and after
// let currentHour = +Date().slice(16,18);
// console.log(currentHour);
// if(currentHour < 12){
//     console.log("Good Morning!")
// } else if (currentHour < 18){
//     console.log("Good Afternoon!")
// } else {
//     console.log("Good Evening!")
// }

// Logical operators:
// symbles that allow you to combine multiple conditions
// || this is OR        this will evaluate to true if either option is true
// && this is And         this will evaluate to true only if both options are true
// ! thi is NOT          this will flip the truthyness of the options
// // || OR:
// console.log(true || true);
// console.log(true ||false);
// console.log(false || true);
// console.log(false || false);
// some values are "tuthy" or "falsy".
// they will behave like true and false without being true or false
// 1 is truthy 0 is falsy
// console.log(1 || 0);
// console.log(0 || 0);
// most of the time you're using || to test if any of the given conditions are true
// let hour = 9;
// if (hour < 9 || hour > 18){
//     console.log("We're Closed")
// } else {
//     console.log("We're Open!")
// }
// // ! NOT:
// if (!(hour < 9 || hour > 18)){
//     console.log("We're Open!")
// } else {
//     console.log("We're Closed")
// }
// // && And:
// if (!(hour < 9) && (hour > 18)){
//     console.log("We're Closed")
// } else {
//     console.log("We're Open!")
// }
// // We can apply more than two conditions:
// let hour = 8; 
// let isWeekend = true;
// if (hour < 7.5 || hour > 14.5 || isWeekend){
//     console.log("School's Closed")
// } else {
//     console.log("School's Open")
// }
// // functionally javascript's OR function finds the first truthy value, then returns it
// if no truthy value is founf it returns the last value
// let firstName = "";
// let lastName = "";
// let nickName = "";
// console.log(firstName || lastName || nickName || "Anonymous");
// // functionally javascript's AND funtion finst the first falsy value then returns it
// if no falsy value is found it returns the last value
// console.log(10 && 5 && 0 && 1);
// console.log(10 && 5 && 1);
// && has higher precident than || (pemdas)
// console.log(true && false || true && false);
// // ! NOT
// convers the value to a Boolean, then it flips the truthyness of the value
// console.log(!true);
// console.log(0);
// console.log(!0);        // returns true
// because of this conversion element you can use two !! to conver something to a boolean value
// console.log(!!0);       // returns false
// NOT has the highets precident of all logical operators

// // ? is a conditional oporator (ternary)
// let a person sign up for a social media account if they're over a certain age
// Example: traditonal approach
// let regestrationAllow;
// let age = prompt("How old are you (in years)");
// if (age > 13){
//     regestrationAllow = true;
// } else {
//     regestrationAllow = false;
// }
// // Example using condional operators
// let age = prompt("How old are you (in years)");
// let regestrationAllow = (age > 13) ? true : false;
// console.log(regestrationAllow);
// // you can use multipule ?
// let age = prompt("age?");
// let message = (age < 3) ? "You're just a baby" : 
// (age < 10) ? "Hi there kiddo" : 
// (age < 60) ? "Hello" :
// (age < 100) ? "Howdy Grandpa" :
// "Dang you're old";
// console.log(message);

// SWITCHES
// a differant way to do an if/else if/ else if ... chain
// switches test for "Strict Equality". 
// "===" is how you test for strict equality
// strict equality is when the values are the same AND and data types match
// console.log(3 == "3");      // true
// console.log(3 === "3");     // false
// // example switch:
let a = 2 + 2
switch (a) {
    case 3:
        alert("Too small");
        break;
    case 4:
        alert("Exactly right");
        break;
    case 5:
        alert("Too big");
        break;
    default:
        alert("What are you even doing?");
}