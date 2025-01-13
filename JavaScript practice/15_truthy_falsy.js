
// Flasy values 

/* 
false (The Boolean false value itself)
0 (The number zero)
"" or '' (An empty string)
null (An absence of any value)
undefined (A variable declared but not assigned a value)
NaN (Not-a-Number)
*/

if (0) {
  console.log("This will not run because 0 is falsy");
}

if ("") {
  console.log("This will not run because an empty string is falsy");
}

if (null) {
  console.log("This will not run because null is falsy");
}


// truthy vlaues 

/* 
Non-zero numbers (e.g., 1, -100, 3.14)
Non-empty strings (e.g., "hello", ' ' (space))
Objects (e.g., {}, [])
true (The Boolean true itself)
*/
if (42) {
  console.log("This will run because 42 is truthy");
}

if ("hello") {
  console.log("This will run because non-empty strings are truthy");
}

if ({}) {
  console.log("This will run because an empty object is truthy");
}
