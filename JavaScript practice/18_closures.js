//A closure happens when a function remembers the variables from its lexical scope, 
// even after the outer function has finished executing.

function outer() {
    let count = 0;  // Outer function variable
    
    function inner() {
        count++;  // Accesses count from outer function
        console.log(count);  // Prints the updated count
    }
    
    return inner;  // Returns the inner function
}

const closureFunction = outer();  // Outer function is called, inner is returned
closureFunction();  // Prints: 1
closureFunction();  // Prints: 2


