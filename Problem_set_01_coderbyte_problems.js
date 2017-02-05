/**
 * Created by bikram on 2/4/17.
 * these are all coderbyte problems
 */

let fizzbuzz = (n) => {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let add = '';
        if (i % 3 === 0) { add += 'Fizz'; }
        if (i % 5 === 0) { add += 'Buzz'; }
        if (add === '') { result.push(i); }
        else { result.push(add); }
    }
    return result;
};
console.log('fizzbuzz',fizzbuzz(3)[2] === 'Fizz');
console.log('fizzbuzz',fizzbuzz(5)[4] === 'Buzz');
console.log('fizzbuzz',fizzbuzz(15)[14] === 'FizzBuzz');

let twoSum = (arr, S) => {
    let hashTable = {};
    for (let i = 0; i < arr.length; i++) {
        let sumMinusElement = S - arr[i];
        if (typeof  hashTable[sumMinusElement] !== 'undefined') {
            return true;
        }
        hashTable[arr[i]] = true;
    }
    return false;
};
console.log('twoSum',twoSum([1,2,3],5) === true);
console.log('twoSum',twoSum([1,2,3],6) === false);

// let does not work for recursion calls, using block scope
// let sumOfNestedArray = (arr) => {
var sumOfNestedArray = function (arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            result += sumOfNestedArray(arr[i]);
        } else {
            result += arr[i];
        }
    }
    return result;
};
console.log('sumOfNestedArray',sumOfNestedArray([1,2,[1,2,3]]) === 9);
console.log('sumOfNestedArray',sumOfNestedArray([1,2,3]) === 6);

let clockAngle = (hour, min) => {
    var h = 0.5 * (60 * hour + min);
    var m = 6 * min;
    var angle = Math.abs(h - m);
    return (angle > 180) ? 360 - angle : angle;
};
console.log('clockAngle',clockAngle(3,0) === 90);

/**
 is the given number a prime
 */
function isprime(n) {
    if (n < 2) {
        return false;
    }
    // loop from 2 to sqrt(n)
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        // check if (n mod i) is equal to 0, if so then there are
        // two numbers, a and b, that can multiply to give n
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 implement map
 */
function map(arr, fn) {
    let result = [];
    // apply the function to each element and store the result
    for (let i of arr) {
        let applied = fn(i);
        result.push(applied);
    }
    return result;
}

// usage
let square = (x) => x * x;
let addZeros = (x) => parseInt(x += '00');
map([1, 2, 3, 4], square); // => [1, 4, 9, 16]
map([1, 2, 3, 4], addZeros); // => [100, 200, 300, 400]

/**
 implement filter
 */
function filter(arr, fn) {
    let result = [];
    // pass the element to the function and check
    // if the result comes back true
    for (let i of arr) {
        let check = fn(i);
        if (check) {
            result.push(i);
        }
    }
    return result;
}
// usage
let isPositive = (x) => x > 0;
filter([-2, 4, 5, 8, -44, -6], isPositive); // => [4, 5, 8]

/**
 You are given an array of characters and a string S.
 Write a function to return the string S with all the characters
 from the array removed
 */
function removeChars(arr, string) {
    // store characters of arr in a hash table
    var hashTable = {};
    for (let c of arr) {
        hashTable[c] = true;
    }
    // loop through the string and check if the character exists in
    // the hash table, if so, do not add it to the result string let result = '';
    for (let c of string) {
        if (hashTable[c] === undefined) {
            result += c;
        }
    }
    return result;
}
// usage
removeChars(['h', 'e', 'w', 'o'], "hello world"); // => "ll rld"

/**
 You are given a string with the symbols ( and ) and you need to write a
 function that will determine if the parenthsis are correctly nested in the
 string which means every opening ( has a closing )
 */
function matchingParens(string) {
    let counter = 0;
    for (let c of string) {
        if (c === '(') {
            counter += 1;
        }
        if (c === ')') {
            counter -= 1;
        }
    }
    return (counter === 0);
}

/**
 you are given a string and you should return the first character
 that is unique in the entire string
 */
function firstNonrepChar(string) {
    let hashTable = {};
    // store each character in the hash table with
    // the frequency of times it occurs
    for (let c of string) {
        if (hashTable[c] === undefined) {
            hashTable[c] = 1;
        } else {
            hashTable[c] += 1;
        }
    }
    // loop through string and return the first character
    // with a count of 1 in the hash table
    for (let c of string) {
        if (hashTable[c] === 1) {
            return c;
        }
    }
    // return -1 if no unique character exists
    return -1;
}
