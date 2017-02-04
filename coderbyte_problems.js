/**
 * Created by bikram on 2/4/17.
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
console.log(fizzbuzz(3)[2] === 'Fizz');
console.log(fizzbuzz(5)[4] === 'Buzz');
console.log(fizzbuzz(15)[14] === 'FizzBuzz');

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
console.log(twoSum([1,2,3],5) === true);
console.log(twoSum([1,2,3],6) === false);

let sumOfNestedArray = (arr) => {
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

function clockAngle(hour, min) {
    var h = 0.5 * (60 * hour + min);
    var m = 6 * min;
    var angle = Math.abs(h - m);
    return (angle > 180) ? 360 - angle : angle;
}