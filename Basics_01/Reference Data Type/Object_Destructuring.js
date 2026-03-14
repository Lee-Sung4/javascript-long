// Object Destructuring
// JavaScript syntax that simplifies extracting properties from an object and binding them to variables

const user = {
  name: "Shawn",
  age: 22,
};
const { name, age } = user;

console.log(name);

// -----------------------------------

const student = {
    name: "John",
    age: 19,
};

// Assigning to New Variable Names
const { name: gugu = "user name", age: gaga = 18} = student;
// You can assign a default value to a variable in case the property is missing or its value is undefined in the source object.

console.log(gugu);
console.log(gaga);


// Nested Object Destructuring: Destructuring works with nested objects, allowing you to access deeply nested properties in a single line of code.

const user007 = {
  fullName: {
    firstName: "Jane",
    lastName: "Doe"
  }
};
const { fullName: { firstName } } = user007;
console.log(firstName); // "Jane"

// ----------------The Rest Syntax (...)--------------------
// You can collect the remaining properties of an object that were not explicitly destructured into a new object using the rest property syntax.


const person = {
  name0: "John",
  age: 30,
  city: "New York",
  occupation: "Software Engineer"
};
//  by using ... we can use rest property
const { name0, ...restDetails } = person;
console.log(name0);         // Output: John
console.log(restDetails);  // Output: { age: 30, city: 'New York', occupation: 'Software Engineer' }

// ------------

// Function Parameters: Object destructuring is particularly useful in function parameters, allowing you to unpack required properties directly into variables within the function's scope.

// 1. The Traditional Way (Without Destructuring)
// You pass the whole object (user), then access properties using dot notation inside the function. 

const user0 = { name: "Alice", age: 30, country: "USA" };

function displayUser(user0) {
  // Extracting properties inside the body
  console.log(`${user0.name} is ${user0.age} years old.`);
}

displayUser(user0); // "Alice is 30 years old."


// 2. The Modern Way (With Object Destructuring)
// You use curly braces {} in the parameter list to pull out only the properties you need (name, age) immediately. 

// Destructuring directly in the parameters
function displayUser({ name, age }) {
  // 'name' and 'age' are now direct variables in this scope
  console.log(`${name} is ${age} years old.`);
}

displayUser(user0); // "Alice is 30 years old."