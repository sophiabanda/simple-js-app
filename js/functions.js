"use strict"
//Functions ------------------------------------------------------

// function ShowMessage() {
//     console.log("Hello Ron!");
//     // document.write("Hello Ron!");
//  }
//  ShowMessage();

//  function sum(val1, val2) {
//     return val1 + val2;
//  }

//  let result = sum(5, 20)
//  console.log(result)

 //Function EXPRESSION: ------------------------------------------------

//  let add =  function sum(val1, val2) {
//     return val1 + val2;
//  }

//  let result = add(5, 20)
//  console.log(result) 

//ANONYMOUS Functions, must be assigned to a variable! -----------------------------------------------------

// let Message = function (){
//     console.log("Hello World!");
//  };
 
//  Message();
 // -----------------------------------------
//  let sayHello = function (firstName) {
//     console.log("Hello " + firstName);
//  };
 
//  sayHello("Bobby");
//  sayHello();

//CALLBACK FUNCTION ----------------------------------------

// function funcOne (param) {
//     return param;
// }

// function funcTwo (param) {
//     return param + 2
// }

// console.log(funcOne(2));
// console.log(funcTwo(funcOne(2))); //BUT WHY DOES IT ADD THEM TOGETHER?????

//PURE FUNCTIONS ------------------------------------------------------

// function addTwo (number) {
//     return number + 2;
// }
// -------------------------


// let age = 20;

// function getNewAge(age) {
// age = age + 1;
//   return age;
// }

// console.log(getNewAge(age)); // returns 11
// console.log(age); // returns  10


function dividerTool (divider, divisor) {
  if (divider === 0) {
    return 'This tool does not work with 0 as an input. Try another number.';
  } else {
    let result = divider/divisor;
    return result;
    
  }
}

console.log(dividerTool(176, 2));
console.log(dividerTool(1200, 4));
console.log(dividerTool(100, 0)); //Why does this give me the console.log but also the undefined? Is it undefined for result?


// a function without a return statement
function add(number1, number2) {
  return number1 + number2;
  console.log(number1 + number2);
}
let result2 = add(1, 2);
console.log(result2) //will console.log undefined since result2 is assigned what is returned by add(1, 2) which is undefined. 

// a function with a return statement
function multiply(number1, number2) {
  return number1 * number2;
}
let result = multiply(3, 5);
console.log(result);

// //PREDEFINED FUNCTIONS ------------------------------------
// console.log('Hello!');
// console.warn('Warning!');
// console.error('Error!');

// function runThisLater() {
//   console.log('Hello!');
// }
// setTimeout(runThisLater, 1000); // Run this in 1000ms
