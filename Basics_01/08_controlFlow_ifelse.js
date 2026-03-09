// In JavaScript, if / else is used for control flow—it lets your program make decisions based on conditions.

let age = 16;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you are not eligible to vote");
}

// Flow:

// Condition true → if block
// Condition false → else block

// ----------------------------------
// when there are multiple conditions.

let marks = 51;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// ------------------------
// Nested if
// An if inside another if.
let age2 = 17;
let hasID = false;

if (age2 >= 18) {
  if (hasID) {
    console.log("Entry allowed");
  } else {
    console.log("Bring your Id to Enter Sir");
  }
} else {
  console.log("Your age eligiblity Denied");
}




// -------------example--------------

let number = 11;

if (number % 2 === 0) {
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is a odd number`);
}
