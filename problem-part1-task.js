/** Task - 1
 * Write a function to convert temperature from Celsius to Fahrenheit.
 */

function temperature (celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

const fahrenheitOutput = temperature(5);
console.log(fahrenheitOutput);


/** Task - 2
 * You are given an array of numbers. Count how many times the a number is repeated in the array.
 * sample-input: numbers = [5,6,11,12,98, 5]
 * find: 5
 * output: 2
 * 
 * Another Task
 * 
 * sample-input: numbers = [5,6,11,12,98, 5]
 * find: 25
 * output: 0
 */

function numChecker(numbers, targetNum) {
   let count = 0;
   for (let number of numbers){
    if (number === targetNum) {
        count++;
    }
   }

   return count;
}

const arrayNumber =  [5,6,11,12,98, 5];
const find = 5;

console.log(numChecker(arrayNumber, find));

function findNumber(numbers, find) {
    let count = 0;
    for (const number of numbers) {
        if (number === find) {
            count++
        }
    }
    return count;
}

const input = [5,6,11,12,98, 5];
const numberOutput = findNumber (input);
console.log(numberOutput);



/** Task - 3 
 * Write a function to count the number of vowels in a string.
*/

function vowelChecker (words) {
    let vowelCount = 1;
    for(const word of words) {
        if (word === 'a' || word === 'A' || 
            word === 'i' || word === 'I' ||
            word === 'o' || word === 'O' ||
            word === 'u' || word === 'U') {
            vowelCount++
        }
    }
    return vowelCount;
    
}

const alphabet = 'hello i am arif hossain...and you?';
const alphabetCheck = vowelChecker(alphabet);
console.log(alphabetCheck);


/** Task - 4
 * Write a function to find the longest word in a given string.
 * sample-input: I am learning Programming to become a programmer
 * sample-output: Programming
 */

function longest(sentence) {
    const words = sentence.split(' ');
    let longestWord = words[0];
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const longesSentence = 'I am learning Programming to become a programmer';
const checkLongest = longest(longesSentence);
console.log(checkLongest);


/** Task - 5
 * Generate a random number between 10 to 20.
 */

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);


