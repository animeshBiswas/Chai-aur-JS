/*
There are two main ways to create objects in JavaScript:

1) Using object literals

2) Using constructors (functions or classes)

There is a concept called Singleton. Singleton is a design pattern in which a constructor or class is controlled so that only one object is created from it.

This means only one instance exists, and if you try to create the object again, instead of creating a new instance, the same existing object is returned.
*/

// Object literals :-  singleton donst exists
// Object.create => this how objects is create from constructor method from which singleton is created 


const mySym = Symbol("key1") // here defining mySym as symbol 


const JsUser = {
    name: "Animesh", // =? system take name as "name" string
    "full name": "Animesh Biswas",
    // mySym: "myKey1", // mySym datatype is string not symbol so to make into a symbol then use [mySym]
    [mySym]: "myKey1", // Its asked in the interview how to define symbol in a object so its very important
    age: 10,
    location: "Jaipur",
    email: "animesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email); // not a good way to access
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser["mySym"]); // typeof is string but its supposed to be symbol
// console.log(JsUser[mySym]); // myKey1 and symbol is comes under special to access value so [] is better than . interms of accessing the value

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // .freeze() purpose to not make any changes in JsUser object
JsUser.email = "hitesh@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.age} years old`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
