// Hello this is a comment
// Date 17/02/2026

var fruit = "Apple"; // universal
console.log(fruit);

if (true) {
  var a = 5;
}
console.log(a); // 5 ❗
// It leaks outside the block.

let age = 12;
const name = "Flins";

console.log(age);
console.log(name);

// DEEP CONCEPT 1: SCOPE
// Scope determines where a variable can be accessed.

// 1️⃣ Global Scope
// Declared outside functions/blocks.
let globalVar = "Hello";

function test() {
  console.log(globalVar);
}
// Accessible everywhere.

// 2️⃣ Function Scope
// Variables declared inside a function.

function greet() {
  let message = "Hello, Good Morning";
  console.log(message);
}

greet();
// console.log(message);  ❌ cannot access message outside of the scope



// 3️⃣ Block Scope
// Inside {} (if, for, while, etc.)
if (true) {
  let x = 10;
  const y = 20;
}





// 🔥 Deep Concept 2: Hoisting (VERY IMPORTANT)

// let & const Hoisting

// console.log(b);
// let b = 10;

// ❌ ReferenceError

// Because of something called:

// 🔥 Temporal Dead Zone (TDZ)

// From start of scope → until variable is declared.



// 🔥 Deep Concept 3: Shadowing

let x = 10;

function test() {
  let x = 20;
  console.log(x); // 20
}

test();

// When inner variable hides outer one.



// 🔥 Deep Concept 5: Scope Chain

// JavaScript looks for variables:

// 1 Current scope

// 2 Outer scope

// 3 Global scope

let L = 1;

function outer() {
  let b = 2;

  function inner() {
    let c = 3;
    console.log(L, b, c);
  }

  inner();
}

outer();
