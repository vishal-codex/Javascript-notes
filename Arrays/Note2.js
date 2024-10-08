/*
Basic Array Methods
*******************/
// Array length => The length property returns the length (size) of an array:
const array1 = [1, 2, 3];

console.log(array1.length);



// Array toString() =>The JavaScript method toString() converts an array to a string of (comma separated) array values.

console.log(array1.toString());


// Array at()

/**
 * The at() method returns an indexed element from an array.

The at() method returns the same as [].

The at() method is supported in all modern browsers since March 2022:
it will work with negative index as well
 */

console.log(array1.at(-3)) //1

// Array join()
/**
 * The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator:
 */

const abc = array1.join('::');
console.log(array1); // not change in original array
console.log(abc);//1::2::3




// Array pop()=>The pop() method removes the last element from an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
/**
 * Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 */

console.log(fruits);



// Array push() =>The push() method adds a new element to an array (at the end):

const a = fruits.push("akm")
console.log(a); // 4
console.log(fruits);
//Appends new elements to the end of an array, and returns the new length of the array.




// Array shift()
/**Removes the first element from an array and returns it. If the array is empty, 
 * undefined is returned and the array is not modified. */
const removedElement = fruits.shift();
console.log("removedElement", removedElement);

console.log(fruits);


// Array unshift()
/**Elements to insert at the start of the array.
Inserts new elements at the start of an array, and returns the new length of the array. */
const val = fruits.unshift('kela');
console.log(fruits);
console.log(val);//length of new array



// Array delete()
/**
 * Using delete() leaves undefined holes in the array.
Use pop() or shift() instead.
 */

delete fruits[fruits.length - 1];

console.log(fruits);


// Array concat()

/**The concat() method creates a new array by merging (concatenating) existing arrays:
The concat() method does not change the existing arrays. It always returns a new array.

The concat() method can take any number of array arguments. 
*/

const array2 = [1, 2, 3];
const array3 = [7, 8, 9];

const ar = array2.concat(array3, 4, 22, 33);
console.log(ar);


// Array copyWithin()
/**The copyWithin() method copies array elements to another position in an array:
 * Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

@param target
If target is negative, it is treated as length+target where length is the length of the array.

@param start
If start is negative, it is treated as length+start. If end is negative, it is treated as length+end.

@param end — If not specified, length of the this object is used as its default value.
The copyWithin() method overwrites the existing values.

The copyWithin() method does not add items to the array.

The copyWithin() method does not change the length of the array.
 */
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.copyWithin(3, 0,);
console.log(fruits1);



// Array flat()
/**Flattening an array is the process of reducing the dimensionality of an array.

Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array. */
const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();

console.log(newArr);

// Array splice()
/**Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
@param items — Elements to insert into the array in place of the deleted elements.

@returns — An array containing the elements that were deleted. */
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits2);



// Array toSpliced()
/**
 *  Array toSpliced() method as a safe way to splice an array without altering the original array.

The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.


 */
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1,"ab" ,"bc");
console.log(spliced);
console.log(months);



// Array slice()
