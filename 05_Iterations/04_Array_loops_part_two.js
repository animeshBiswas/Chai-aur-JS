const myObject = {
    js:  "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
}
/*
js 
js
cpp
rb
swift
*/

for (const key in myObject) {
    // console.log(myObject[key]);
}
/*
js 
Javascript
C++
ruby
swift by apple
*/

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
/*
js 
js shortcut is for Javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
}
/*
0
1
2
3
4

if you noticed its doesnt print the values instead it prints keys but its from the array not the object and for the info. array are also in key:value pair if you refer documentations so to print the value see the below code 
*/
for (const key in programming) {
    // console.log(programming[key]);
}
/*
js
rb
py
java
cpp
*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(key); // it didnt print
    
}

// note :- for object use forin loop and for arrays use forof loop