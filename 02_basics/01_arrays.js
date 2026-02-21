// array

const myArr = [0,1,2,3,4,5]
const myHeors = ["shaktiman", "naagaraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array methods

// myArr.push(6) // add the value at the end of the array
// myArr.push(7) 
// myArr.pop() // remove the value from the end of the array

myArr.unshift(9) // add the value at the start of the array
myArr.shift() // // add the value at the start of the array

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(9)); // -1

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);
