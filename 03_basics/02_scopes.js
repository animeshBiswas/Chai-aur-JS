const a = 300

if (true) { // <- this is local scope and outside is global scope, what is coded inside the local scope it will not be accessible outside the scope their is exceptions i.e. var thats why let and const is prefered to use
    let a = 10
    const b = 20
    var c = 30 // its is accessible but is not recommended to use this variable
    // console.log("INNER: ", a); // 10
    
}

// console.log("OUTER ", a); // 300
// console.log(b);
// console.log(c);

// in browser and node level scope works very differently and its asked in the interview too

// **********************************************************************
//Understand scoping in a analogy of requesting a icecream where children can ask for a ice-cream to a elders but elders can ask for a ice-cream to children so in this example children is func. two and elder is func. one
function one(){
    const username = "Animesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error
    
    two()
}

// one()
/*
if (true) {
    const username = "Animesh"
    if (username === "Animesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);  // error
}

// console.log(username); // error
*/



// ******************* Interesting *******************
addone(5)

function addone(num){
    return num + 1
}

addTwo(5)

const addTwo = function(num){   // <= function expressions
    return num + 2
}

