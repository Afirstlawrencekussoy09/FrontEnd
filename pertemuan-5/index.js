// // JavaScript Function
// // Cara 1. Function Declaration
// function greetings(){
//     console.log("Hello Word");
// }

// greetings1(); // Call / Execute Function

// // Cara 2. Function Expression
// let greetings2 = function (){
//     console.log("Hello Word");
// };
// greetings2();

//Parameter & Argument (input), Return (output)
//Cara 1.
// //                  parameter
// function greetings1(fullName) {
//     return "Hello" + fullName;
// }
// //                      argument
// let output = greetings1("John Doe");
// console.log (output);

// Cara 2.
// let greetings2 = function (fullName){

// }



// // Function Hoisting
// //Cara 1.
// //                      argument
// let output = greetings1("John Doe");
// console.log (output);
// //                  parameter
// function greetings1(fullName) {
//     return "Hello" + fullName;
// }
// //Cara 2.
// let output2 = greetings2("John Doe")




//Global Scope & Local Scope

let x = 10;//Global, bisa di akases di dalam fungsi dan di luar fungsi

function foo(){
    let y = 20;//Local, hanya bisa di akases di dalam function
    console.log(x);//10
    console.log(y);//20
    if(y > 10){
        let z = 30;//Local Block
        console.log(x);//bisa
        console.log(y);//bisa
        console.log(z);//30
    }
    //console.log(z); //ERROR
}
console.log(10);//10
foo();
