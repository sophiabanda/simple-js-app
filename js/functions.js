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
//-------------------------
// let age = 10;

// function getNewAge(age) {
// age = age + 1;
//   return age;
// }

// console.log(getNewAge(age)); // returns 11
// console.log(age); // returns  10


