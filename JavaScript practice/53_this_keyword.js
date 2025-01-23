// this in global space 
console.log(this);
//output : this refers to the global object.
 


// this in a function (non-strick mode)
function showThis() {
    console.log(this);
}
showThis(); // Browser: window, Node.js: global



// this as an object 

const obj = {
    a: 10,
    x: function () {
        console.log(this.a); // prints - 10
        console.log(this);  // prints - { a: 10, x: [Function: x] }
    }
};

obj.x(); // Output: 10 (this refers to obj)

// this as an arrow functions
const obj2 = {
    a: 10,
    x: () => {
        console.log(this.a);
        console.log(this)
    }
};

obj2.x(); // Output: undefined (arrow function doesn't bind `this` to obj)






