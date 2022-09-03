const { listOfMeasurements } = require("./measurements");

function countDepthIncrease(measurements) {
    let count = 0;
    let largestSoFar = measurements[0];

    for (let i = 1; i < measurements.length; i++) {
        let current = measurements[i];
        
        if (current > largestSoFar) {
            count += 1;
            largestSoFar = current;
        } else {
            largestSoFar = current;
        }
    }
    return count;
}

console.log(countDepthIncrease(listOfMeasurements))