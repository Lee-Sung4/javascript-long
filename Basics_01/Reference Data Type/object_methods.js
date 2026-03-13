// Object Methods
// Important built-in object methods:

// 1. Object.keys()
// Returns all keys.
const user = {
  name: "Flins",
  age: 825,
  address: "Nasha Town",
};

const key = Object.keys(user);
console.log(key);



// 2. Object.Values()
// Return all values
const value = Object.values(user);
console.log(value);


// 3. Object.entries(user);
// *************************** which returns an array of [key, value] pairs  *******************************
// ************* we use entries to enable iteration and transformation using array-specific methods*********************************

const toArray = Object.entries(user)
console.log(toArray);
