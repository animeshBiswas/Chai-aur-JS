function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("M");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName  this is functions references
// sayMyName() // this is functions executions

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("Animesh");  // after return next line of code will not be executed
    
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ",result);

function loginUserMessage(username = "sam"){
   if (!username) { // generally undefined or "" considered as false value so its uses !username because username = undefined and its false and you use "!" then it becomes true
        console.log("please enter a username");
        return
   }
    return `${username} just logged in`
}

// console.log(loginUserMessage()); // if you didnt pass any value in the parameter then it'll print => undefined just logged in

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Animesh",
    price: "199"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);   
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 100]));
