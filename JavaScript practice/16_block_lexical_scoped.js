// Example of Blocked scoped

//Block scope means variables declared inside a block {} are only accessible within that block.
// let and const has blocked scoped and var does'nt have block scope

{
    let a = 10;  // Block-scoped
    const b = 20;  // Block-scoped
    var c = 30;  // Not block-scoped
    console.log(a, b, c);  // Works
}
// console.log(a, b);  // ReferenceError (a and b are block-scoped)
console.log(c);  // 30 (var is accessible outside the block)



//example of lexical scope 
// Refers to where a variable is accessible based on where it is defined in the source code.

let x = 10;  // Outer variable

{
    let y = 20;  // Inner variable
    console.log(x);  // Can access outer variable (x)
}
// console.log(y);  // ReferenceError (Cannot access inner variable from outer scope)


// example of scope chain
// If a variable is not found in the current scope,
// JavaScript looks up the chain to outer scopes until it finds the variable.

let a = 1;

function outer() {
    let b = 2;
    function inner() {
        let c = 3;
        console.log(a, b, c);  // Accesses all outer variables
    }
    inner();
}
outer();


