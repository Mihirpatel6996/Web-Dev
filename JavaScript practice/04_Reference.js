let obj1 = { name: "Alice" };
let obj2 = obj1; // Copying the reference (not the actual object)

console.log(obj1); // Output: { name: "Alice" }
console.log(obj2); // Output: { name: "Alice" }

obj2.name = "Bob"; // Changing obj2 also changes obj1
console.log(obj1); // Output: { name: "Bob" }
console.log(obj2); // Output: { name: "Bob" }
