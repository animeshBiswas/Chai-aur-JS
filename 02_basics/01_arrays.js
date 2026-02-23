// array

const myArr = [0,1,2,3,4,5]
const myHeors = ["shaktiman", "naagaraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);
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
// console.log(myArr.indexOf(9)); // its checks the index of the given value whether its exists or not on the array and returns the value -1 if dont exists

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);
