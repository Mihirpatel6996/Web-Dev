arr = [1,3,2,5,6]

function isOdd(num) {
    return num % 2 !== 0; // Returns true if num is odd
}


function isEven(num) {
    return num % 2 === 0; // Returns true if num is even
}


let oddNumbers = arr.filter(isOdd);   // [5, 1, 3]
let evenNumbers = arr.filter(isEven); // [2, 6]

// or 

arr.filter(function isEven(num) {
    return num % 2 === 0; // Returns true if num is even
})

// or 

arr.filter((num) =>  num % 2 === 0); // Returns true if num is even)



console.log("Original Array:", arr); 
// Original Array: [5, 1, 3, 2, 6]

console.log("Odd Numbers:", oddNumbers); 
// Odd Numbers: [5, 1, 3]

console.log("Even Numbers:", evenNumbers); 
// Even Numbers: [2, 6]
