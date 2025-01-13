/* */


/* 
basic function
syntax --> function Function_Name (parameters) {   code to execute followed by return value(optional)}
*/
function sayHello(name) {
  return "Hello, " + name + "!";
}

let greeting = sayHello("Mihir");
console.log(greeting); // Output: "Hello, Mihir!"



/* 
Function Expression 
 A function stored inside a variable  
syntax --> Function_Name = function(parameters) { code to exectue }
*/
let multiply = function(a, b) {
  return a * b;
};
console.log(multiply(2, 3)); // Output: 6


/* 
Arrow functions 
this is a shorter way to write functions
syntax --> let Functin_Name = (parameters) => code to execute
*/
let add = (a,b) => a+b;

console.log(add(2,3));


/* 
Functions with default parameters

*/

function greetuser(name="Guest"){

    return "Hello " + name + " !";

}

console.log(greetuser())  // works if no parameters are given 


/* 
First Class Functions 
this means Functions can be 

Assigned to variables (Function Expression). (this we have seen above )
Passed as arguments to other functions.
Returned from other functions.
*/


//Passed as arguments to other functions.

function greetUser(name, callback) {
  let message = "Hello, " + name;
  callback(message);
}

greetUser("Mihir", function(msg) {
  console.log(msg); // Output: Hello, Mihir
});


//Returned from other functions.
function outer() {
  return function inner() {
    return "I'm an inner function!";
  };
}

let innerFunction = outer();
console.log(innerFunction()); // Output: I'm an inner function!






