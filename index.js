// Code your solution here

function findMatching (drivers, name) {
    const newDrivers = drivers.filter(function (driver) {
        return driver.toLowerCase() === name.toLowerCase()
    });

    return newDrivers;
}

function fuzzyMatch (drivers, name) {
    const newDrivers = drivers.filter(function (driver) {
        return driver.charAt(0) === name.charAt(0);
    });
    return newDrivers;
}

function matchName (drivers, name) {
    const newDrivers = drivers.filter(function (driver) {
        return driver.name === name; 
    });
    return newDrivers;
} 

