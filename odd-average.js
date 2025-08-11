function oddAverage(numbers) {
    const oddArray = [];
    let oddSum = 0;
    for (const number of numbers) {
        if (number % 2 === 1) {
            oddArray.push(number);
        }
    }

    for (const number of oddArray) {
        oddSum = oddSum + number;
    }
    const count = oddArray.length;
    const average = oddSum / count;
    return average;
}

const oddNumbers = [4, 11, 19, 5, 8, 27, 62, 17, 96, 101];
const output = oddAverage(oddNumbers);
console.log('Average Sum of All Odds Numbers:', output);
