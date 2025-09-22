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
console.log(10 && 5 && 0 && 1);
console.log(10 && 5 && 1);
// && has higher precident than ||