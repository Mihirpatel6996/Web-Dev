
//simple callback function 

function sayHello(name) {
    console.log(`Hello, ${name}`);
}

function processUser(name, callback) {
    console.log("Processing user...");
    callback(name); // Calling the callback function
}

processUser("Mihir", sayHello);
// Output:
// Processing user...
// Hello, Mihir




// use cases 

// 1. in Async programming

setTimeout(function() {
    console.log("This message appears after 2 seconds.");
    }, 2000);
console.log("This appears immediately.");
// Output:
// This appears immediately.
// This message appears after 2 seconds.

// event handlling --> continues in next section




