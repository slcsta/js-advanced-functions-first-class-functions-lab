// Code your solution in this file!

// 1. declare a variable using const
// 2. assign an anonymous function to that variable
// 3. the assigned function accepts an array of drivers as an argument
// 4. return the first two drivers in the array

const returnFirstTwoDrivers = function (drivers) {
    
    return drivers.slice(0, 2);
    //for(let i = 0; i < drivers[2]; i++)
};

const returnLastTwoDrivers = function (drivers) {

    return drivers.slice(-2);

}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

// higher order function 
// takes in one argument: an integer
// returns a function that will multiply a fare for a ride

function createFareMultiplier(number) {
    return function(fare) {
        return fare * number;
    }; 
};

// declare a variable w/const
// assign the function createFareMultiplier() to it
// invoke createFareMultiplier so that 
// fareDoubler doubles fare
// fareTripler triples fare

const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3);

// function takes 2 args: array of drivers and either returnFirstTwoDrivers() or returnLastTwoDrivers() function
// selectDifferentDrivers() will return either the first two or last two drivers

const selectDifferentDrivers = function(drivers, selectDrivers) {
    return selectDrivers(drivers)

}





