//js runtime environment in action


console.log("Start");

setTimeout(function callback() {
  console.log("Timeout complete");
}, 2000);

Promise.resolve()
  .then(function microtask() {
    console.log("Microtask resolved");
  });

console.log("End");

