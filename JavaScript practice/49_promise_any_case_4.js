

//Case 4: All Promises Are Rejected


const p1 = new Promise((_, reject) => setTimeout(() => reject("P1 rejected after 3 seconds"), 3000));
const p2 = new Promise((_, reject) => setTimeout(() => reject("P2 rejected after 2 seconds"), 2000));
const p3 = new Promise((_, reject) => setTimeout(() => reject("P3 rejected after 1 second"), 1000));

Promise.any([p1, p2, p3])
    .then((result) => {
        console.log("Resolved with:", result);
    })
    .catch((error) => {
        console.error("All promises rejected:", error.errors);
    });


    /*  
    All promises rejected: [
  'P1 rejected after 3 seconds',
  'P2 rejected after 2 seconds',
  'P3 rejected after 1 second'
]
    */