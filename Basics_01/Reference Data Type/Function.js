// 1. Basic Function Syntax

function greet() {
  console.log("gugu gaga");
}

greet(); // calling the function

// 2. Function with Parameters

function greeting(name) {
  console.log(`Hola ${name} mucho gusto!`);
}

greeting("Martin");

// 3. Function with Return Value
// A function can return a value using return.

function add(a, b) {
  return a + b;
}

console.log(add(5, 6))


// 4. Function Expression
// A function can also be stored in a variable.

const multiply = function(a, b){
    return a * b;
}

console.log(multiply(8, 3));


// 5. Arrow Function (Modern JavaScript)

const minus = (a, b) => {
    return a - b;
}

console.log(minus(9, 7));


// ✅ Summary:

// function → define a function
// parameters → inputs to function
// return → output from function
// arrow functions → modern shorter syntax