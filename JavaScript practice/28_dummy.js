// this code we use to add a delay simulation of 10 seconds in the call stack 


// we can use this to block a call stack also 


let startDate = new Date().getTime();
let endDate = startDate;
let count =0;

while (endDate < startDate + 25000) { 
  endDate = new Date().getTime();
  console.log(count++);
} 