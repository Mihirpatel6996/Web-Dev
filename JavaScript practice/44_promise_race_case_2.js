const p1 = new Promise((resolve, reject) => setTimeout(() => resolve("P1 resolved after 2 seconds"), 2000));
const p2 = new Promise((resolve,reject) => setTimeout(() => reject("P2 rejected after 1 second"), 1000));

Promise.race([p1, p2])
    .then((result) => {
        console.log("Resolved with:", result);
    })
    .catch((error) => {
        console.log("Rejected with:", error);
    });



// Regardless of whether the first promise resolves or rejects, 
// Promise.race() immediately settles with that result.


// output : Rejected with: P2 rejected after 1 second

