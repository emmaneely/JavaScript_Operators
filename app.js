console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

let a = 20;
let b = 4;
let add = a + b;
  console.log(add);
let minus = a - b;
  console.log(minus);
let multiply = a * b;
  console.log(multiply);
let dividing = a / b;
  console.log(dividing);

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

console.log (num + str);
  // What is the value of: num + str?
  // Answer: 1111

console.log(num + str2);
  // What is the value of: num + str2?
  // Answer: 11eleven

console.log(num + isPresent);
  // What is the value of: num + isPresent?
  // Answer: 12

console.log(firstName + num);
  // What is the value of: firstName + num?
  // Answer: Frodo11

console.log(isPresent + str);
  // What is the value of: isPresent + str?
  // Answer: true11

console.log(firstName + lastName);
  // What is the value of: firstName + lastName?
  // Answer: FrodoBaggins

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let val = 5;
str = "5";
str2 = "five";
isPresent = false;

console.log (val == str);
  // What is the value of: val == str?
  // Answer: true

console.log(val === str);
  // What is the value of: val === str?
  // Answer: false

console.log(!isPresent);
  // What is the value of: !isPresent?
  // Answer: true

console.log("eleven" == str2 && val >= str);
  // What is the value of: (“eleven” == str2 && val >= str)?
  // Answer: false

console.log(!isPresent || isPresent);
  // What is the value of: (!isPresent || isPresent)?
  // Answer: true

console.log(0 == false);
  // What is the value of: 0 == false?
  // Answer: true

console.log(0 === false);
  // What is the value of: 0 === false?
  // Answer: false

console.log(0 != false);
  // What is the value of: 0 != false?
  // Answer: false

console.log(0 !== false);
  // What is the value of 0 !== false?
  // Answer: true