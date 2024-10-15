//IIFE & Callback Function
//1.IIFE(Immediately Invoked Function Expression)
//a. no params, args & return value
// (function () {
//     console.log("Hello Word");
// })();
// //b. with params, args & return value


//1. Callback Function
//a. no params, args & return value
// function sayHello(callback) {
//     callback();
// }

// sayHello(function () {
//     console.log("Hello Word");//Callback function
// });

//b. with params, args & return value
// function sayHello(callback) {
//     let result = callback("John Doe");
//     return result;
// }

// let output = sayHello(function (fulName) {
//     return "Hello " + fulName;
// });
// console.log(output);