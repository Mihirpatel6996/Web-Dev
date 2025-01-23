// simple async function

// Simulates a network call to fetch user data
function getUserData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("User data loaded!"), 2000);
    });
}
 
// Async function
async function fetchData() {
    console.log("Start fetching data...");
    const data = await getUserData(); // Pauses until the promise resolves
    console.log(data); // "User data loaded!"
}

fetchData();

/*
Start fetching data...
User data loaded!
*/
