
var a = [1,2,3,4,5,6];
var b = [...a];

b.pop()
console.log(b) // Output : [1,2,3,4,5]
console.log(a) // Output : [1,2,3,4,5,6]


let obj1 = { name: "Alice", age: 25 };
let obj2 = { ...obj1 }; // Creates a new object

obj2.name = "Bob";
console.log(obj1); // Output: { name: "Alice", age: 25 }
console.log(obj2); // Output: { name: "Bob", age: 25 }



