// Code your solution here
// Function to find matching drivers by name (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}


// Function to find drivers whose names start with a given string
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

// Function to find objects in an array where the `name` property matches a given name
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Example test calls (optional, for checking functionality)
const driversList = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
