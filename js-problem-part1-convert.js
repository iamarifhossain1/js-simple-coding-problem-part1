function inchToFeet (inch) {
    const feet = inch / 12;
    return feet;
}

const height = inchToFeet(75);
console.log(height);

/**
 * Inch to Feet
 */

function inchToFeet2(inch) {
    const feet = inch / 12;
    const feetInt = parseInt(feet);
    const inchConvert = inch % 12;
    const result = feetInt + ' ft ' + inchConvert + ' inch';
    return result; 
}

const output = inchToFeet2(66);
console.log(output);


/**
 * Mile to Kilometer
 */

function mileToKilometer (mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

const mileConvert = mileToKilometer(5);
console.log(mileConvert);


/**
 * Kilometer to Mile
 */

function kilometerToMile(kilo) {
    const mile = kilo * 0.621371;
    return mile;
}

const kiloConvert = kilometerToMile(7);
console.log(kiloConvert);
