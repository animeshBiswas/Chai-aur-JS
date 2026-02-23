// const tinderUser = new Object() // this is singleton object
const tinderUser = {} // and this is not singleton object

tinderUser.id = "123abc"
tinderUser.name = "Animesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Animesh",
            lastname: "Biswas"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) // {} => target, obj1, 2 as source to make it simple to understand
/*
Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
Object.assign(target,sourcr)
return the traget 
*/

const obj3 = {...obj1, ...obj2} // much better to do this way than doing .assing()
// console.log(obj3); 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Animesh', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Animesh' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

/*
To learn more about object property then go the browser then inspect element and go to console and enter 
const obj1 = {1: "a", 2: "b"}
then next line enter >obj1
from the propotype on the below you will see list of property
*/ 



// ########################################################
// Object de-structure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor); // hindi 
console.log(instructor);

// {      <= this json structure 
//     "name": "Animesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]