

// Adding properties to an object

// Dot notation
let person = { name: "John" };
person.age = 30;  // Add a new property "age"
console.log(person); // Output: { name: "John", age: 30 }

// Bracket notation
person["city"] = "New York";  // Add a new property "city"
console.log(person); // Output: { name: "John", city: "New York" }

//updating Object Properties

// Dot Notation
person.age = 25;  // Update the "age" property
console.log(person); // Output: { name: "John", age: 25}

// Bracket Notation
person["age"] = 50;  // Update the "age" property
console.log(person); // Output: { name: "John", age: 50 }

//Deleting a property

delete person.age;  // Deletes the "age" property
console.log(person); // Output: { name: "John" }








