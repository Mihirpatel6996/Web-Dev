//Case 1: All Promises Resolve

const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 resolved"), 3000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 resolved"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("P3 resolved"), 1000));

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log("All Promises Resolved:", results); // ["P1 resolved", "P2 resolved", "P3 resolved"]
    })
    .catch((error) => {
        console.log("One of the Promises Rejected:", error);
    });


/* 
Output : All Promises Resolved: ["P1 resolved", "P2 resolved", "P3 resolved"]

Time Taken : 3 seconds

Reason: Even though p3 and p2 resolve earlier, Promise.all waits for all promises to complete.


*/
