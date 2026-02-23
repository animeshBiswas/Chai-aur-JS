const marvel_heros = ["thor", "Ironman","spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// Spread operator means spread the things like  you take a glass and dropping on the floor then its break the glass and its spread glass everywhere

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1 , 2, 3, [4 , 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // returns a new array with all sub-array elements concatenated into it recursively up to the sepcified depth.
console.log(real_another_array); 
/*
output :-
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/


console.log(Array.isArray("Hitesh")); // False
console.log(Array.from("Hitesh")); // conversions from anything i.e. as of noe its string to array
/*
output :-
[ 'H', 'i', 't', 'e', 's', 'h' ]
*/
console.log(Array.from({name: "animesh"})) // interesting
// o/p :- [] empty array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
