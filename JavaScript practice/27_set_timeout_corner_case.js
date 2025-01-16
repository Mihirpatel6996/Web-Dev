//Why the code provided behaves unexpectedly 
//(printing the setTimeout callback after 10 seconds instead of 5).



console.log("Start"); // 1. Logs "Start"

// Schedule the setTimeout
setTimeout(function cb() {
  console.log("Callback");
}, 5000); // 2. Timer starts counting down (5 seconds) in Web APIs

console.log("End"); // 3. Logs "End"

// Create a blocking operation: a 10-second while loop
let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) { // 4. Blocks the Call Stack
  endDate = new Date().getTime();
}

console.log("While expires"); // 5. Logs "While expires"
