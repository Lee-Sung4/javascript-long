let fruits = ["apple", "banana", "mango"];


// Accessing Array Elements

console.log(fruits[0]);
console.log(fruits[2]);


// Changing Array Elements

fruits[1] = "orange"
console.log(fruits);


// Array Length
console.log(fruits.length);


// ---------------------------------------------------------------------------------

// Common Array Methods

// push()– add to end
fruits.push("grapes");


// pop() – remove last element
fruits.pop();


// shift() remove  fisrt element of an array

fruits.shift()


// unshift() – add to beginning

fruits.unshift("banana")


console.log(fruits);
// ------------------------------------------------------------------

// filter() – Filter elements
// Returns a new array with elements that match a condition.

let ary1 = [1, 2, 3, 4, 5, 6]
 
let odd = ary1.filter(num => num % 2 === 1 )

console.log(odd);  // [1, 3, 5]


// map() – Transform each element
// Creates a new array by applying a function to each element.


let double = odd.map(num => num * 2)

console.log(double);

// slice() – Extract part of array
// Returns a portion of the array.

let result = ary1.slice(3, 5)

console.log(result);

//  includes() – Check if value exists

if (fruits.includes("apple")){
    console.log("There is apple in the fruits box"); 
} else {
    console.log("There is NO apple in the fruits box");
    
}



//  *****************************************************************************************************
// Looping Through an Array for loop


// const vegetables = ["tommato", "potato", "carrot", "onion", "broccoli"];

// for (const veg of vegetables) {
//     console.log(veg);
    
// }

// for (let i = 0; i < vegetables.length; i++){
//     console.log(vegetables[i]);
// }


// vegetables.forEach(function (veg){
//     console.log(veg);
    
// })


// ******************************************************

// splice() – Add or remove elements

// ***** array.splice(start, deleteCount, item1, item2, ...)****

// Parameters

// 1. start → Index where the change begins
// 2. deleteCount → Number of elements to remove
// 3. item1, item2, ... → Elements to add (optional)

let numbers = [10, 20, 30, 40, 50, 60];

numbers.splice(2, 2);
console.log(numbers);

// adding new element 
numbers.splice(2, 1, 67, 69);
console.log(numbers);


// Negative Index in splice()
// count from backward
numbers.splice(-1, 1)
console.log(numbers);
