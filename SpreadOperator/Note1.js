/**Spread operator (...) in JavaScript is a powerful tool that allows you to expand elements from an 
 * iterable (like an array or object) into individual elements. */


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Spread to combine arrays
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
console.log( ...arr1 +12);
