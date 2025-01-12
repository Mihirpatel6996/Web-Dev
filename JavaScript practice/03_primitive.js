let a = 10;
let b = a; // Copying the value of `a` into `b`

console.log(a); // Output: 10
console.log(b); // Output: 10

b = 20; // Changing `b` does not affect `a`
console.log(a); // Output: 10
console.log(b); // Output: 20
