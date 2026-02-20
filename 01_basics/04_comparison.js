// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true -> >= converts null to number → 0; So it becomes: 0 >= 0 → true

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);



// ===

console.log("2" === 2);

/* 
Best way to remember about null is that you request a temperature from a server and server gave us a null not zero (because zero is a value and not empty) due to server cant able to fetch temperature 

Type Conversion:-


> from to Numbers:
 "33" => 33
 "33abc" => NaN
 true => 1; false => 0


> from to Boolean:
  1 => true; 0 => false;
  NaN => false;
  "" => false;
  "hitesh" => true;


>convert during operations
=>if string is written first then convert all after it to string:
              "2" + 2 + 2 = 222
               "1" + 2 = 12
=>if string comes after then the conversion occurs at last 
               2 + 2 + "2" = 42
               1 + 1 + "2" + 2 + 1  = 2221


#use +operand to convert the operand to number
notes :- The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

null is treated in a special way by the Equals Operator (==). In a brief, it only coerces to undefined:

null == null; // true
null == undefined; // true
Value such as false, '', '0', and [] are subject to numeric type coercion, all of them coerce to zero.
*/