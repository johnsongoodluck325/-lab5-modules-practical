import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

console.log('Add: ', add(12, 8));
console.log('Subtract: ', subtract(50, 17));
console.log('Multiply: ', multiply(7, 6));

console.log('Uppercase: ', toUpperCase('goodluck work'));
console.log('Lowercase: ', toLowerCase('JAVASCRIPT IS POWERFUL'));

console.log('Max: ', findMax([14, 3, 29, 8, 11]));
console.log('Reversed: ', reverseArray([9, 4, 2, 1]));

addAndLogUpper(15, 25);

const numbers = [5, 18, 42, 7, 30];
const maxNumber = findMax(numbers);
const multiplied = multiply(maxNumber, 3);
const finalResult = toUpperCase(multiplied.toString());


console.log('Final Combined Result: ', finalResult);