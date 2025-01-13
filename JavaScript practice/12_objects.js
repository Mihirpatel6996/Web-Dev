

let person = {
  name: "John",          // Property: key is "name", value is "John"
  age: 30,               // Property: key is "age", value is 30
  greet: function() {    // Method: a function inside the object
    console.log("Hello!");
  }
};

//properties -- these are values inside the objects 

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022
};

console.log(car.brand);  // Output: "Toyota"
console.log(car.model);  // Output: "Corolla"
console.log(car.year);   // Output: 2022


// methods : functions inside an object 

let calculator = {
  add: function(a, b) {
    return a + b;  // This is a method that adds two numbers
  },
  subtract: function(a, b) {
    return a - b;  // This is a method that subtracts two numbers
  }
};

console.log(calculator.add(10, 5));       // Output: 15
console.log(calculator.subtract(10, 5)); // Output: 5


// Accessing object properties 

// 1. Dot method 

console.log(car.brand); // Output: "Toyota"
console.log(car.model); // Output: "Corolla"

// 2. Bracket method []

console.log(car["brand"]); // Output: "Corolla"
console.log(car["year"]); // Output: 2022











