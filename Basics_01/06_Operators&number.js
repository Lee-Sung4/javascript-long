// Operators 

// 1 Arithmetic Operators

// Used to perform mathematical calculations.
 let num1 = 10;
 let num2 = 3;


 console.log(num1 + num2);
 console.log(num1 - num2);
 console.log(num1 * num2);
 console.log(num1 / num2);
 console.log(num1 % num2); // Modulus (remainder)
 console.log(num1 ** num2); // Exponentiation



 let x = 4;
 let y = x++;
//  let z = ++y   increment (prefix) Increments first, then returns the new value.
console.log(x);
console.log(y); // increment (postfix) Returns the original value, then increments.
 


// 2️⃣ Comparison Operators
// Used to compare two values and return true or false.

let a = 11;
let b = 5

console.log(a == '11');   // Equal to (value only) -------> True
console.log(a === '11');   // Strict equal (value + type)------>False
console.log(a != b);       // not equal
console.log(5 !== '5');   // Strict not equal
console.log(a > b);      // greater  than
console.log(a < b);      // less then
console.log(a >= b);      // greater then or equal
console.log(a <= b);      // less then or equal



// 3️⃣ Logical Operators:
//  && (Logical AND)
//  || (Logical OR)
//  ! (Logical NOT)


// The AND operator returns true only if BOTH conditions are true, else false.
console.log(a > 9 && b > 7);

// The OR operator returns true if AT LEAST ONE condition is true.
console.log(a > 9 || b > 7);

// The NOT operator reverses the boolean value.

let isLoggedIn = false;

console.log(!isLoggedIn);

