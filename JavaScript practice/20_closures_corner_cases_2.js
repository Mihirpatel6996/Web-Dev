// Corner Cases in Closures

//2. Using Closures Inside Loops (Common Pitfall):

function loopTest() {
    let funcs = [];
    for (var i = 0; i < 3; i++) {
        funcs.push(function() {
            console.log(i);  // Uses `i` from the outer scope
        });
    }
    return funcs;
}

const funcArray = loopTest();
funcArray[0]();  // Prints: 3
funcArray[1]();  // Prints: 3
funcArray[2]();  // Prints: 3

/*  Why ????
i is shared by all the closures created in the loop.
By the time funcArray is called, i has already reached 3.
*/


// Fix Using let (Block Scope):

function loopTest_2() {
    let funcs_2 = [];
    for (let j = 0; j < 3; j++) {  // Use `let` instead of `var`
        funcs_2.push(function() {
            console.log(j);  // Each closure gets its own `i`
        });
    }
    return funcs_2;
}

const funcArray_2 = loopTest_2();
funcArray_2[0]();  // Prints: 0
funcArray_2[1]();  // Prints: 1
funcArray_2[2]();  // Prints: 2

