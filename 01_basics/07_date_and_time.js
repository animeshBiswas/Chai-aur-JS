// Dates

let myDate = new Date()
// console.log(myDate.toString()); // Fri Feb 20 2026 17:54:27 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Fri Feb 20 2026
// console.log(myDate.toLocaleString()); // 2/20/2026, 5:55:18 PM
// console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2026, 0, 23) // Date(year, month, date)
// let myCreatedDate = new Date(2026, 0, 23, 5, 3) // Date(year, month, date,hour,mins) it will be 24-hrs format and months starts with 0 to 11
// let myCreatedDate = new Date("2026-01-14") // format is in yy-mm-dd and months starts from 1 to 12
let myCreatedDate = new Date("01-14-2026")
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); convesrions from millisecond to seconds and commonly asked questions in interview

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default', {
    weekday: "long"
})