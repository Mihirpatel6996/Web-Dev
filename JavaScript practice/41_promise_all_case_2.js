// case 2 :One Promise is Rejected

const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 resolved"), 3000));
const p2 = new Promise((_, reject) => setTimeout(() => reject("P2 rejected"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("P3 resolved"), 1000));

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log("All Promises Resolved:", results);
    })
    .catch((error) => {
        console.log("One of the Promises Rejected:", error); // "P2 rejected"
    });


    /* 
p1 takes 3 seconds, p2 is rejected after 2 seconds, and p3 resolves after 1 second.
Promise.all rejects immediately when the first promise rejects (p2).

Output : One of the Promises Rejected: P2 rejected

Time Taken:
2 seconds. (first 1 sec p3 is resolved and p2 half is completed , after 1 sec p2 will take the next sec and is rejected)
Reason: As soon as a promise rejects, Promise.all throws an error and stops further 
    */