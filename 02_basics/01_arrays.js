// array

const myArr = [0,1,2,3,4,5]
const myHeors = ["shaktiman", "naagaraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);
/*
Arrys comes under shallow copy
Shallow copy :- Is an object whose properties share the same references [point to the same underlying values] as those of the source object from which the copy was made
e.g. arrays etc [non-primitive]
Deep copy :- Is an object whose properties do not share the same references [point to the same underlying values] as those of the source object from which the copy was made
e.g. variables etc [primitive]
*/

// Array methods

// myArr.push(6) // add the value at the end of the array
// myArr.push(7) 
// myArr.pop() // remove the value from the end of the array

// myArr.unshift(9) // add the value at the start of the array
// myArr.shift() // // add the value at the start of the array

// console.log(myArr.includes(9)); // its checks the values its exists or not on the array and reture the value true or false 
// console.log(myArr.indexOf(9)); // its checks the index of the given value whether its exists or not on the array and returns the value -1 if dont exists or it will return the index no. of the value

const newArr = myArr.join() // Add all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// Slice, splice

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) // Extract a portion of an array without modifying the original array and Returns a new array

console.log(myn1); // [ 1, 2 ]
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3) // Add, remove, or replace elements by modifying the original array and Returns the removed elements
console.log("C ", myArr); // C  [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3 ]