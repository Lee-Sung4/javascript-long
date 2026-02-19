// Primitive Types  <-------------->Reference (Non-Primitive) Types

// 1. Primitive Types
// -----> string, number, boolean, null, undefined, symbol  and bigint


// String

let name = 'Jahoda';
// ✔ Immutable (cannot change original value)
// ✔ Stored by value


// number
let age = 22;
let price = 99.99;


// boolean 
let isLoggedIn = true;

// Only true or false.


// Undefined
// Variable declared but not assigned.
let x;
console.log(x); // undefined


// Null
// Intentional empty value 
let user = null;

// typeof null // "object"  (JavaScript bug)
console.log(typeof(user));



// Symbol(ES6)
// Create unique identifiers
let id = Symbol("id");
// Even if description same, symbols are unique.

// BigInt
// For very large integers beyond Number limit.
let big = 12345678901234567890n;



// 🔥 Important Property of Primitives
//      ✔ Stored in Stack
//      ✔ Copied by Value
//      ✔ Immutable




// 2️⃣ Reference Types (Non-Primitive)
// -----> Object, Arrey and Function