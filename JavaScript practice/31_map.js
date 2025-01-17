

function double(num) {
    return num * 2;
}

function triple(num) {
    return num * 3;
}

function binary(num) {
    return num.toString(2); // Converts number to binary string
}



let arr = [5, 1, 3, 2, 6];

// Applying double function
let doubledArray = arr.map(double); // [10, 2, 6, 4, 12]

// Applying triple function
let tripledArray = arr.map(triple); // [15, 3, 9, 6, 18]

// Applying binary function
let binaryArray = arr.map(binary); // ["101", "1", "11", "10", "110"]


console.log("Original Array:", arr); 
// Original Array: [5, 1, 3, 2, 6]

console.log("Doubled Array:", doubledArray); 
// Doubled Array: [10, 2, 6, 4, 12]

console.log("Tripled Array:", tripledArray); 
// Tripled Array: [15, 3, 9, 6, 18]

console.log("Binary Array:", binaryArray); 
// Binary Array: ["101", "1", "11", "10", "110"]



