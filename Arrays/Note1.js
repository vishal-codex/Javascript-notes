// /**
//  * Array Creation in JavaScript:
// Using Array Literals:

// You can create arrays using literals in two ways:
// Empty Array:
// const array1 = [];
// Elements can be added later using index.
// Example: array1[0] = 5;
// Array with Initial Values:
// const array2 = [5];
// Both of these arrays will hold similar content but are distinct objects, 
// so they will not be equal when compared using == (since object comparison is
//  based on reference, not value).
// Example: array1 == array2; // false
// Object Comparison in Arrays:

// Since arrays are objects, comparing them directly checks their memory addresses, 
// not their values.
// Example:
// const array3 = array1;
// array1 == array3; // true
// Here, array3 points to the same memory reference as array1, so they are equal.
// Handling Undefined and Sparse Arrays:

// Assigning values to non-contiguous indices will result in undefined or 
// empty slots in between.
// Example:
// const array4 = [];
// array4[1] = 5;
// array4[8] = "amit";
// Output: [ <1 empty item>, 5, <6 empty items>, 'amit' ]
// Using Array Constructor:

// You can create arrays using the Array constructor:
// Empty Array:
// const arr1 = new Array(); // []
// Array with Values:
// const arr2 = new Array(2, 4); // [2, 4]
// Single Numeric Argument:
// If you pass a single number as an argument, the array will be created with that number
// as its length, filled with undefined.
// Example: const arr3 = new Array(5); // [ <5 empty items> ]
// This behavior can lead to confusion if you are trying to create an array with a 
// single numeric element.
//  * An array is a special variable, which can hold more than one value:-
//  * in javascript the type can be anything.
//  *
//  * So you can create array with many ways
//  * 
//  */

// // creation of array using literals

// const array1 = [];  //first way with object literal
// array1[0] = 5;
// console.log(array1);

// const array2 = [5]; //second way
// console.log(array2);

// //so as you can see that both array is same and now we are going to check that it
// // equal or not

// console.log(array1 == array2); //false

// /**
//  *  array is an object as well and if we compare the object then it will check
//  * the memory address not value
//  * 
//  */
// const array3 = array1;
// console.log(array1 == array3); //true

// /**
//  * Now we see some anoher scenario
//  * 
//  */

// const array4 = [];

// array4[1] = 5;

// array4[8] = "amit";

// console.log(array4);//[ <1 empty item>, 5, <6 empty items>, 'amit' ]
// console.log(array4[3]); //undefined


// /**
//  * You can create an array by using array constructor
//  */

// const arr1 = new Array();
// console.log(arr1); //[]

// /**
//  * 
//  */

// const arr2 = new Array(2, 4);
// console.log(arr2); // 2,4


// /**
//  * But there is a problem when you put single number in new Array()
//  * then it will create the array with length of that number with undefined values
//  */

// const arr3 = new Array(5);
// console.log(arr3);

// // so if you can't create a single element array with Array Constructor


// How to Recognize an Array

// method:


console.log(Array.isArray([])); //true

console.log(Array.isArray(null)); //false

const arr = ["1"];
arr["amit"] = 5
//[ '1', amit: 5 ]

console.log(arr instanceof Array); //true
console.log(arr[1]); //undefined






