

//Case 1: All Promises Are Resolved

const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 resolved after 3 seconds"), 3000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 resolved after 2 seconds"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("P3 resolved after 1 second"), 1000));

Promise.any([p1, p2, p3])
    .then((result) => {
        console.log("Resolved with:", result);
    });



    // output : P3 resolved after 1 second
    // Resolves as soon as any one of the promises resolves