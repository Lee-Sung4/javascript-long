//  using spread syntax with object

// 1. Shallow Copying an Object

const originalObject = { name: "Alice", age: 30 };
const clonedObject = { ...originalObject };

console.log(clonedObject);
// Output: { name: 'Alice', age: 30 }
originalObject.age = 32;
console.log(originalObject);

// ---------------
// 2. Merging Objects

// You can combine properties from two or more objects into a single new object.
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = { ...object1, ...object2 };

console.log(mergedObject);
// Output: { a: 1, b: 3, c: 4 }
//Important: When properties have identical names (like b in the example above), the value from the last object encountered in the spread operation will overwrite the earlier one.

// ------------------
// 3. Adding or Overwriting Properties

const person = { name: "Alice", age: 30 };
const updatedPerson = { ...person, age: 31, location: "Wonderland" };

console.log(updatedPerson);
// Output: { name: 'Alice', age: 31, location: 'Wonderland' }
console.log(person);
// Output: { name: 'Alice', age: 30 } (original is unchanged)

// ***********spread operator create shallow copy.BUT NESTED OBJECT OR ARRAYS ARE COPIED BY REFERENCE****************
// **************
//           Object       vs         Array
//
//      Key-value pairs	        Ordered list
//            {}                  	[]
//       Access via key       	Access via index
