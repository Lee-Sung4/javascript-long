// while loops
// It is useful when you don't know exactly how many times the loop should run.

let student = 1;

while (student <= 13) {
  console.log(student);
  student++;
}

// let password = "";

// while (password !== "admin123") {
//   password = prompt("Enter password:");
// }

// while do loop
//  same as while loop but The code runs at least once, even if the condition is false.

let num = 0;
do {
  console.log(num);
  num++;
} while (num < 10);

// for of loop
// to be continued.....

//  with array
const name = ["joy", "ruby", "gugu"];

for (let n of name) {
  console.log(n);
}

//  with strings
const text = "this is pengmin";

for (let t of text) {
  console.log(t);
}

// with object

const students = [
  {name: "justin"},
  {name: "neymar"},
  {name: "roni"}
];

for (let student of students) {
    
    if(student.name === "roni"){
        console.log(`roni stole the money`);
        break
    }
    console.log(student.name);
    
}



// for...in is used to iterate over the keys (properties) of an object

const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
};

for (let key in person) {
  console.log(key);          // property name
  console.log(person[key]);  // property value
}

// more in reference data type 
