const user = {
    username: "Animesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`);
        
    }
}

// user.welcomeMessage()
// user.username = "sama"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = 'Animesh'
//     console.log(this.username);
    
// }
// chai() // undefined

// const chai = function(){
//     let username = 'Animesh'
//     console.log(this.username);
// }
// chai() // undefined

// const chai = () => {
//     let username = 'Animesh'
//     console.log(this);
// }

// chai() // {}

// const addTwo = (num1, num2) => {
//     return num1 + num2 // this is explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2

//If you use the curly braces then you have to use return keyword if dont want to use return then you have remove the curly braces too
// const addTwo = (num1, num2) =>  (num1 + num2) // this is implicit return

// but there is some exception to return object you have to use curly braces inside the parenthesis
const addTwo = (num1, num2) =>  ({username: "animesh"})

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()