// this in strict mode 

"use strict";

// this inside a function - strict mode
function showThis() {
    console.log(this);
}
showThis(); // undefined
