//
// 
// 
// Case 1: All Promises Resolve

const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 resolved after 2 seconds"), 2000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 resolved after 1 second"), 1000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("P3 resolved after 3 second"), 3000));

Promise.race([p1, p2]).then((result) => {
    console.log("Resolved with:", result);
});



/*
Output:
Resolved with: P2 resolved after 1 second
*/