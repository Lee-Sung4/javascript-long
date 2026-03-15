

// 1️⃣ Function Hoisting
// Function declarations are fully hoisted.

greet();

function greet() {
  console.log("Hello");
}

// ✅ This works because the whole function is hoisted to the top.
// ---------------------------------------------

// 3️⃣ Hoisting with let and const

// let and const are also hoisted but not initialized.
// They stay in something called the Temporal Dead Zone (TDZ) until the line where they are declared.

console.log(a);
let a = 5;


// -----------------------

// 4️⃣ Function Expressions (Not Fully Hoisted)

sayHi();

var sayHi = function() {
  console.log("Hi");
};


// internally:-
// var sayHi;
// sayHi(); // undefined()
// sayHi = function() {
//   console.log("Hi");
// };


// Hoisting in JavaScript is the behavior where variable and function declarations are moved to the top of their scope during the compilation phase before code execution.