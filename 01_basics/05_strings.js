const name = "animesh"
const repoCount = 50

// console.log(name + " " + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('animesh-ab') // act as a object

/* 
console.log(gameName[0]);
console.log(gameName);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
*/
// As you noticed og value of gameName didnt changed to uppercase instead it remains the same due to stack memory

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // (num1, num2-1) => (0,3)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    animesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://animesh.com/animesh%20biswas"

console.log(url.replace('%20', '-'));

console.log(url.includes('animesh'));

console.log(gameName.split('-'));


// Homework :- Write the types of strings in Javascript