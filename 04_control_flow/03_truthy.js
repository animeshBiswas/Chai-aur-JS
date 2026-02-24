// const userEmail = "h@hitesh.ai"
// const userEmail = []

// if (userEmail) {
//     console.log("Got User emai");
// } else {
//     console.log("Dont have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// Truthy values
// "0", 'false'or "false", " ", [], {}, function(){}

// if (userEmail.length == 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}