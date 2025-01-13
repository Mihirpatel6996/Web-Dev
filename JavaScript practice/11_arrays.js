

//basic array 

let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: ["apple", "banana", "cherry"]

let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// fetching array values using index 

console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana

//push operation

fruits.push("mango");
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry', 'mango' ]

// push operation with multipe elements

fruits.push("grape" , "orange");
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry', 'mango', 'grape', 'orange' ]

// pop operation

let removed_fruit = fruits.pop(); //removes last item from the array
console.log(fruits); //Output : [ 'apple', 'banana', 'cherry', 'mango', 'grape' ]
console.log(removed_fruit); // output : orange

//Shift operation

let removed_shift_fruit = fruits.shift() // removes first element from the array 
console.log(fruits);  // Output: [ 'banana', 'cherry', 'mango', 'grape' ]
console.log(removed_shift_fruit); // Output: apple


//unshift operation 

fruits.unshift("apple")  // adds an element in the start of the array 
console.log(fruits); // Output : [ 'apple', 'banana', 'cherry', 'mango', 'grape' ]






