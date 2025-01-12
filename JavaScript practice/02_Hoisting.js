// hoisting with var

console.log(a); // Output: undefined
var a = 5; 
console.log(a); // Output: 5


// hoisting with let and const 

console.log(b); // Error: Cannot access 'b' before initialization
let b = 10;
console.log(b); // Output: 10



console.log(c); // Error: Cannot access 'c' before initialization
const c = 20;
console.log(c); // Output: 20


