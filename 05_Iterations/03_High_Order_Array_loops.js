// for of

// ["","",""]
// [{},{},{}]
// for (const element of object) {
    // element = iterator 
// }

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}
/*
o/p :-
1
2
3
4
5
*/

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}
/*
o/p :-
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !
*/

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // it doesnt allow duplications, its only for unique value
console.log(map);
/*
o/p :-
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

for (const key of map) {
    //console.log(key);
    
}

/*
o/p :-
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

for (const [key, value] of map) { // from here we used the de-structure
    console.log(key, ':-', value);
}
/*
IN :- India
USA :- United States of America
Fr :- France
*/

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); // Error due to object is not iterable but there is other methods to do
// }