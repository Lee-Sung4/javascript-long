// 1 Implicit Type Coercion (Automatic)
//   JavaScript converts types automatically when performing operations.

// 1: String + Number

console.log("5" + 3); // 53
// Number 5 is converted to a string, then concatenated.

// 2: String with Minus

console.log("5" - 3); // 2
// "5" is converted to a number.

// 3: Boolean to Number
// true--> 1
// false--> 0
console.log(true + 1);
console.log(true - 1);
console.log(false + 1);

// 4: Equality Operator

console.log(5 == "5"); // Explanation: "5" is converted to a number.

// -----------------------------------------------------------------------

// 2. Explicit Type Coercion (Manual)
// The programmer intentionally converts a value.
let str1 = "6";
let num1 = 7;

console.log(Number(str1) + num1);

// parseInt("123")
// parseFloat("12.5")


// Convert to String

console.log(str1 + String(num1));
console.log(str1 + num1.toString());



// Convert to Boolean

console.log(Boolean(0));  //false
console.log(Boolean(1));  //true
console.log(Boolean(''));  //false
console.log(Boolean('hi'));  //true

// falsy value:-

// 0 -----> false
// ""----->	false
// null--->	false
// undefined---> false
// NaN-----> false




let arr1 = [] + []

console.log(typeof(arr1)); //  ''
// Because arrays convert to strings.

