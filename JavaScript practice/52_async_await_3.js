const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 5000); // p1 resolves after 5 seconds
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000); // p2 resolves after 10 seconds
});

// Await can only be used inside an async function
async function handlePromise() {
    console.log("Hello World!!");

    const val = await p1; // Wait for p1 to resolve
    console.log("Namaste JavaScript");
    console.log(val); // Logs resolved value of p1

    const val2 = await p2; // Wait for p2 to resolve
    console.log("Namaste JavaScript 2");
    console.log(val2); // Logs resolved value of p2
}

handlePromise();


/* 
Output :
Hello World!!
Namaste JavaScript
Promise Resolved Value!!
Namaste JavaScript 2
Promise Resolved Value!!
*/ 