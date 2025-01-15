// Corner Cases in Closures

//1. Shared Scope Across Multiple Closures:

// here the outer function is returning 2 functions incerment(),and decrement()
// these 2 functions share the same variables 

function outer() {
    let count = 0;
    return {
        increment() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement() {
            count--;
            console.log(`Count: ${count}`);
        }
    };
}

const obj = outer();

console.log(obj) // output : { increment: [Function: increment], decrement: [Function: decrement] }
obj.increment();  // Count: 1
obj.decrement();  // Count: 0





