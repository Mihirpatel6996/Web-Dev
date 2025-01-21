//Case 3: 2 promise Rejects

const p1 = new Promise((resolve, reject) => setTimeout(() => reject("P1 rejected after 1 second"), 1000));
const p2 = new Promise((resolve, reject) => setTimeout(() => reject("P2 rejected after 1 second"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("P3 resolved after 2 seconds"), 3000));

Promise.race([p1, p2])
    .then((result) => {
        console.log("Resolved with:", result);
    })
    .catch((error) => {
        console.log("Rejected with:", error);
    });


// output: Rejected with: P1 rejected after 1 second