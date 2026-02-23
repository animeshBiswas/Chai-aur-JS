// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

/*
()(); // 1st parenthesis for functions definitions and 2nd parenthesis for executions call

We use IIFE to prevent global scope pollution caused by variables and other declarations.
It creates a private scope so variables inside it do not affect the global scope.

Interview one-liner (best answer)
IIFE is used to create a private scope and avoid global scope pollution by immediately executing a function.
*/

(function chai() {
    // Named IIFE
    console.log(`DB CONNECTED`);
} )(); // you have to explicity mentions ";" to end of the execution call so that it doesnt throw any error 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('Animesh'); // DB CONNECTED TWO Animesh


// Note:- In some interview they asked to write 2 IIFE so always ends IIFE with ";"