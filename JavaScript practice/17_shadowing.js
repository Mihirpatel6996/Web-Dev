
//Shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope.


//let and const shadowing 
let x = 10;  // Outer variable

{
    let x = 20;  // Inner variable shadows outer variable
    console.log(x);  // 20
}
console.log(x);  // 10 (Outer variable is still accessible here)




// var shadowing
var y = 30;

{
    var y = 40;  // Shadows outer variable but overwrites it due to no block scope for var
    console.log(y);  // 40
}
console.log(y);  // 40 (Outer variable overwritten)




// Illegal Shadowing
/*
Shadowing becomes illegal if you try to declare let or const variables inside a block 
where a var with the same name already exists in the outer scope, and vice versa.
*/

// let or const shadowing var
var z = 10;

{
    let z = 20;  
    console.log(z);
}

console.log(z);




// var shadowing let or const
let p = 50;

{
    //var p = 60;  // SyntaxError: Identifier 'p' has already been declared
}







