

/* 
Scenario
A user logs into a website.
The server authenticates the user credentials.
Fetch user profile details from the database.
Fetch the user's notifications.
Display the user dashboard with profile and notifications.

*/


// Mock functions simulating server/database calls
function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "user" && password === "pass") {
                console.log("User authenticated!");
                resolve({ userId: 123 });
            } else {
                reject("Invalid username or password");
            }
        }, 1000); // Simulate a 1 second server call
    });
}

function getUserProfile(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched user profile for user ID:", userId);
            resolve({ userId: userId, name: "John Doe", email: "john@example.com" });
        }, 1500); // Simulate a 1.5 second server call
    });
}

function getUserNotifications(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched notifications for user ID:", userId);
            resolve(["Message from Admin", "Reminder: Meeting at 3 PM"]);
        }, 1000); // Simulate a 1 second server call
    });
}

function displayUserDashboard(profile, notifications) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Displaying dashboard:");
            console.log("Profile:", profile);
            console.log("Notifications:", notifications);
            resolve();
        }, 500); // Simulate a 0.5 second rendering delay
    });
}

// Chaining the promises
loginUser("user", "pass")
    .then(user => getUserProfile(user.userId))            // Fetch profile after login
    .then(profile => {                                   
        return getUserNotifications(profile.userId)      // Fetch notifications
            .then(notifications => ({ profile, notifications })); // Pass both data
    })
    .then(({ profile, notifications }) => displayUserDashboard(profile, notifications)) // Display dashboard
    .catch(error => console.error("Error occurred:", error)); // Handle any errors
