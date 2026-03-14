// Looping Through Objects


const user = {
  name: "Rahul",
  age: 25,
  city: "Delhi"
};

// key receives each property name.
// user[key] accesses the value.

for(let key in user) {
    console.log(key, user[key]);
    
}

// for (let key in user) {
//   if (user.hasOwnProperty(key)) {
//     console.log(key, user[key]);
//   }
// }


// Object.keys() + forEach()
// object keys conver it into an array

Object.keys(user).forEach(key => {
  console.log(key, user[key]);
});

// Object.values()

Object.values(user).forEach(value => {
  console.log(value);
  
})


// Object.entries()
// Returns key–value pairs as arrays.

Object.entries(user).forEach(([key, value]) => {
  console.log([key, value]);
})


// for...of with Object.entries()
const student = {
  name: "Amit",
  marks: 85,
  subject: "Math"
};


for (const [key, value] of Object.entries(user)){
  console.log(key, value);
  
}


// Looping Nested Objects

const user07 = {
  name:"june",
  address: {
    city: "Delhi",
    pincode: 110001
  }
}

for(let key in user07){
  if (typeof user07[key] === "object"){
    for(let innerKeys in user[key]){
      console.log(innerKeys, user07[key][innerKeys]);
    }
  }
}


// ***Example Real-World Case***

const settings = {
  darkMode: true,
  notifications: false,
  language: "English"
};



for(const [key, value] of Object.entries(settings)){
  console.log(`Setting ${key} is ${value}`);
  
}