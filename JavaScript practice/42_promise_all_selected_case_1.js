const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 resolved"), 3000));
const p2 = new Promise((resolve, reject) => setTimeout(() => reject("P2 rejected"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("P3 resolved"), 1000));

Promise.allSettled([p1, p2, p3])
    .then((results) => {
        console.log(results);
    });



    /*

Output:
After 3 seconds (the longest promise):

[
  { status: "fulfilled", value: "P1 resolved" },
  { status: "rejected", reason: "P2 rejected" },
  { status: "fulfilled", value: "P3 resolved" }
]


*/