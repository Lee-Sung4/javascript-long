// Object
//  It stores data in key–value pairs.

// ***************Object syntax*****************
// const objectName = {
//    key1: value1,
//    key2: value2,
//    key3: value3
// };

const person = {
  name: "Rahul",
  age: 25,
  city: "Guwahati",
};
// person is an object here

console.log(person);

//--------------------------Accessing Object Properties---------------

// 1️⃣ Dot Notation
console.log(person.city);

// 2️⃣ Bracket Notation
console.log(person["age"]);

// ------------Adding Properties------------

const student1 = {
  name: "Amit",
};

student1.age = 22;
student1.course = "BCA";

console.log(student1);

// ----Updating Properties---
student1.age = 23;
console.log(student1["age"]);


//----Deleting Properties---------

delete student1.course

console.log(student1);


// --------Objects with Functions (Methods)-------------
let calculator = {
  add: function(a, b) {
    return a + b;
  },

  subtract: function(a, b) {
    return a - b;
  }
};

console.log(calculator.add(5,3));
console.log(calculator.subtract(10,4));

//*********And Using this Keyword*******
// this refers to the current object.
const employee = {
    name: "juli",
    greet: function () {
            console.log("Hello");
        },
    introduction: function () {
            console.log(`My name is ` + this.name);
        }
}

employee.greet()
employee.introduction()


// --------------- Nested Objects

// Objects can contain other objects.
const student2 = {
  name: "Ravi",
  marks: {
    math: 90,
    science: 85
  }
};

console.log(student2.marks.math);

//------------------
// *********************Object Constructor****************

// Objects can also be created using a constructor.

function user(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

const user1 = new user("Furina", 500, "Fontaine")
const user2 = new user("Barbra", 16, "Mondstadt")

console.log(user1);

