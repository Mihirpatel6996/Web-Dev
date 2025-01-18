

/* 
Scenario
You want to prepare a meal:
Boil water.
Add rice.
Cook the rice.
Serve the meal.

*/


function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1: Water is boiled.");
            resolve("Boiled water");
        }, 1000); // Simulating 1 second delay
    });
}

function addRice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2: Rice added to the water.");
            resolve("Rice is added");
        }, 1000); // Simulating 1 second delay
    });
}

function cookRice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3: Rice is cooked.");
            resolve("Cooked rice");
        }, 2000); // Simulating 2 seconds delay
    });
}

function serveMeal() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 4: Meal is served.");
            resolve("Meal served!");
        }, 500); // Simulating 0.5 seconds delay
    });
}

// Chaining promises
boilWater()
    .then(result1 => addRice())
    .then(result2 => cookRice())
    .then(result3 => serveMeal())
    .then(result4 => console.log("Dinner is ready!"))
    .catch(error => console.error("Error occurred:", error));
