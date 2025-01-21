// Case 3: Two Promises Are Rejected

const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 resolved after 3 seconds"), 3000));
const p2 = new Promise((_, reject) => setTimeout(() => reject("P2 rejected after 2 seconds"), 2000));
const p3 = new Promise((resolve,reject) => setTimeout(() => reject("P3 rejected after 1 second"), 1000));

Promise.any([p1, p2, p3])
    .then((result) => {
        console.log("Resolved with:", result);
    })
    .catch((error) => {
        console.error("All promises rejected:", error.errors);
    });


    // output : Resolved with: P1 resolved after 3 seconds