// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // False

const bigNumber = 2343498394834982232n



// Reference [Non primitive] type 

// Array, Objects, Functions

// tips from hitesh sir "if you want to master JS then master 2 topics  1) Objects and 2) browser events or web events"


const heros = ["shaktiman", "naagraj", "doga"]

// object is something you write inside a curly braces in a key and value pair
let myObj = {
    name: "Animesh",
    age: 25,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof Object);

// typeof
/*
Primitive datatypes:
String => string
null => object
boolean => boolean
Number => number
undefined => undefined
BigInt => bigint

Non-primitive datatypes:
function => function but its actually called  functions object learn in depth about that
Array => Obhect
Object => when its "CALL" then function otherwise object but techincally its called object

Primitive DataTypes:


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 Refence (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.



lets talk about some Range of Primitive DataType:

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.
*/


// *********************************************************************

// Stack (Primitive), Heap (Non-Primitive)


// Primitive type uses Stack memory what does meant by that if variable is declared in stack memory then they give you a copy

// Non-Primitive type uses Heap memory what does meant by that if variable is declared in Heap memory then they give you a references

let myYoutubename = "animeshbiswasdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"


console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "animesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

