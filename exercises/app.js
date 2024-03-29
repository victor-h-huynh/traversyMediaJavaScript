// ================================================================================== //
// CONSOLE LOG EXERCISE August 16 2019
// ================================================================================== //
//
// console.log("Hello World");
// console.log(123);
// console.log(true);

// var greeting = "Hello";
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error("ERROR ERROR");
// console.clear();
// console.warn("This is a warning");

// console.time('Hello');
//   console.log('Hello World')
//   console.log('Hello World')
//   console.log('Hello World')
//   console.log('Hello World')
// console.timeEnd("Hello");

// ================================================================================== //

// VAR, LET CONST EXERCISE August 16 2019

// ================================================================================== //

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// ================================================================================== //

// INITIALIZER VAR EXERCISE August 16 2019

// ================================================================================== //
// var greeting; // initialzer var
// console.log(greeting); // undefined
// greeting = 'Hello';
// console.log(greeting);

// ================================================================================== //

// LETTERS, NUMBERS, _, $ August 16 2019
  // Cannot start with numbers

// ================================================================================== //

// var 1name = 'John'; DO NOT DO THIS 
// var _name = 'John' DO NOT DO THIS

// ================================================================================== //

// MULTI-WORD VARS EXERCISE August 16 2019

// ================================================================================== //

// var firstName = 'John'; // Camcel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// ================================================================================== //

// LET EXERCISE August 16 2019

// ================================================================================== //

// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// ================================================================================== //

// CONST EXERCISE WITH OBJECTS AND ARRAYS August 16 2019

// ================================================================================== //

// const name = "John";
// console.log(name);
// Can not reassign
// name = 'Sara';
// Const has to have a value assigned to it
// const greeting;

// const person = {
//   name: 'John',
//   age: 30
// }

// console.log(person);

// person.name = 'Sara'; // You can reassigned the value of name and age, but not const person.
// person.age = '25';

// console.log(person);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);

// console.log(numbers);

// ================================================================================== //

// PRIMITIVE VALUES August 16 2019

// ================================================================================== //

// // STRING
// const name = "John Doe";
// // NUMBER
// const age = 45;
// // BOOLEAN
// const hasKids = true;
// // NULL
// const car = null;
// // UNDEFINED
// let test;
// // SYMBOL 
// const sym = Symbol();

// console.log(typeof(name));
// console.log(typeof age);
// console.log(typeof(hasKids));
// console.log(typeof car);
// console.log(typeof(test));
// console.log(typeof sym);

// ================================================================================== //

// REFERENCES OBJECTS August 16 2019

// ================================================================================== //

// // ARRAY
// const hobbies = ['movies', 'music'];
// // OBJECT LITERAL
// const address = {
//   city: 'Boston',
//   state: 'MA'
// }

// // DATES
// const today = new Date();

// console.log(typeof(hobbies));
// console.log(typeof address);
// console.log(today);
// console.log(typeof today);

// ================================================================================== //

// NUMBER TO STRING August 16 2019

// ================================================================================== //

// let val;

// // Number to String
// val = String(555);
// val = String(4+4);

// // Boolean to String
// val = String(true);

// // Date to String
// val = String(new Date());

// // Array to String
// val = String([1,2,3,4]);

// // toString()
// val = (5).toString();
// val = (true).toString();

// // String to numbers
// val = Number('5'); // returns 5 number 5
// val = Number(true); // returns 1 number 1
// val = Number(false); // return 0 number 0
// val = Number(null); // returns 0 number 0
// val = Number('hello'); // returns NaN number NaN
// val = Number([1,2,3]); // returns NaN number NaN

// val = parseInt('100.30'); // returns as integer
// val = parseFloat('100.30'); // returns a float


// // Output
// // console.log(val);
// // console.log(typeof val);
// // console.log(val.length);
// // console.log(val.toFixed(2));

// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

// ================================================================================== //

// NUMBERS AND MATH OBJECT August 16 2019

// ================================================================================== //

// const num1 = 100;
// const num2 = 60;
// let val; 

// // Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2,33,4,1,55,6,3,-2);
// val = Math.max(2,33,4,1,55,6,3,-2);
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);

// ================================================================================== //

// STRING METHODS, CONCATENATION, APPEND, ESCAPING, LENGTH, CONCAT, TOLOWERCASE TOUPPERCASE, INDEXOF, CHARAT, SUBSTRING, SLICE, SPLIT, INCLUDES, REPLACE  August 16 2019

// ================================================================================== //

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 26;
// const str = 'Hello there, my name is Victor';
// const tags = 'web design,web development,programming';

// let val;

// val = firstName + lastName;

// // Concatenation

// val = firstName + ' ' + lastName;

// // Append
// val = 'Victor ';
// val += 'Huynh';

// val = 'Hello, my name is ' + firstName + ' and I am  ' + age;

// // Escaping
// val = 'That\'s awesome, I can\'t wait';

// // Length property
// val = firstName.length;

// // concat() method
// val = firstName.concat(' ', lastName);

// // toUpperCase() and toLowerCase() methods
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// // indexOf() method

// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// // charAt() method
// val = firstName.charAt('2');

// // Get last char
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(0, 4);

// // slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// // split() splits at ','
// val = str.split(' '); // Splits at every ' '
// val = tags.split(','); // Splits at every ','

// // replace() replaces character with second value
// val = str.replace('Victor', 'Anna');

// // includes() returns true or false within a string
// val = str.includes('foo')

// console.log(val);

// ================================================================================== //

// TEMPLATE LITERALS August 16 2019

// ================================================================================== //

// const name = 'Victor';
// const age = 26;
// const job = 'Web Developer';
// const city = 'Montreal';
// let html;

// // Without template strings (es5)

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City:' + city + '</li>'; 

// html = '<ul>' +
//         '<li>Name: ' + name + '</li>' +
//         '<li>Age: ' + age + '</li>' +
//         '<li>Job: ' + job + '</li>' +
//         '<li>City: ' + city + '</li>' +
//        '</ul>'

// function hello() {
//   return 'hello';
// }

// // With template strings (es6)
// html = `
//     <ul>
//       <li>Name: ${name}</li>
//       <li>Age: ${age}</li>
//       <li>Job: ${job}</li>
//       <li>City: ${city}</li>
//       <li>${4 + 4}</li>
//       <li>${hello()}</li>
//       <li>${age < 25 ? 'Under 25' : 'Over 25'}</li>
//     </ul>
// `

// document.body.innerHTML = html;

// ================================================================================== //

// ARRAYS AND MUTATING August 16 2019

// ================================================================================== //

// Creating Arrays
// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

// let val;

// // Get array length
// val = numbers.length;

// // Check if is Array
// val = Array.isArray(numbers);

// // Get single value
// val = numbers[3];
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// MUTATING ARRAYS

// // Add to end of array
// numbers.push(250);

// // Add to front of array
// numbers.unshift(120);

// // Remove from end of array
// numbers.pop();

// // Remove from front of array
// numbers.shift();

// // Slice values
// numbers.splice(1,3);

// // Reverse
// numbers.reverse();

// Concatenate arrays
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function (x, y){
//   return x - y;
// })

// // Reverse sort
// val = numbers.sort(function (x, y){
//   return y - x;
// })

// // Find
// function over50(num) {
//   return num > 50;
// }

// val = numbers.find(over50);

// console.log(numbers);
// console.log(val);

// ================================================================================== //

// OBJECT LITERAL REFERENCE TYPE LOOPS August 16 2019

// ================================================================================== //

// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 36,
//   email: 'steve@hotmail.com',
//   hobbies: ['music', 'sports'],
//   address: {
//     city: 'Miami',
//     state: 'FL'
//   },
//   getBirthYear: function() {
//     return 2019 - this.age;
//   }
// }

// let val;

// val = person;

// // Geting specific value
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//   {name: 'John', age: 30},
//   {name: 'Mike', age: 23},
//   {name: 'Nancy', age: 40}
// ];

// for(let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }
 
// ================================================================================== //

// DATE OBJECTS August 16 2019

// ================================================================================== //

// let val;

// const today = new Date();
// let birthday = new Date('9-10-1981 11:11:11');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/2000');

// val = today.getMonth(); // is index array based
// val = today.getDate();
// val = today.getDay(); // is index array based
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(15);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);

// ================================================================================== //

// IF AND OR TENARY OPERATORS STATEMENTS August 17 2019

// ================================================================================== //

// const id = 100;

// Equal to

// if (id == 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Not Equal to

// if(id != 101) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Equal to value & type
// if (id === 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Equal to value & type
// if (id !== 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }


// Test if undefined
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// Greater or Less than
// if (id <= 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// If else 

// const color = 'yellow';

// if(color === 'red') {
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log(`Color is ${color}`)
// }

// Logical Operators

// const name = 'Steve';
// const age = 65;

// // And &&
// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19){
//   console.log(`${name} is a teengaer`);
// } else {
//   console.log(`${name} is an adult`);
// }

// // Or || 
// if(age < 16 || age > 65) {
//   console.log(`${name} can not run in race`);
// } else {
//   console.log(`${name} is regisered for the race`);
// }

// // Ternary Operator
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// // Without braces
// if (id === 100)
// console.log('CORRECT');
// else
// console.log('INCORRECT');

// ================================================================================== //

// SWITCH STATEMENTS August 17 2019

// ================================================================================== //

// const color = 'red';

// switch(color) {
//   case 'red':
//     console.log('Color is red');
//     break;
//   case 'blue':
//     console.log('Color is blue');
//     break;
//   default:
//     console.log('Color is not red or blue');
//     break;
// }

// let day;

// switch(new Date().getDay()) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
//   default:
//     console.log('Not a valid date');
//     break;
// }

// console.log(`Today is ${day}`);

// ================================================================================== //

// FUNCTIONS August 17 2019

// ================================================================================== //

// Function Declarations

// function greet(firstName = 'Steve', lastName = 'Smith') {
//   // console.log('Hello');
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(greet('John', 'Doe'));

// Function Expressions

// const square = function(x = 3) {
//   return x*x
// };

// console.log(square(8));

// Immediately Invokable Function Expressions - IIFEs

// (function(){
//   console.log('IIFE test');
// })();

// (function(name){
//   console.log('Hello ' + name)
// })('Victor');

// Property Methods

// const todo = {
//   add: function() {
//     console.log('Add todo..')
//   },
//   edit: function(id){
//     console.log(`Edit to do ${id}`)
//   }
// }

// todo.delete = function() {
//   console.log('Delete todo...')
// }

// todo.add();
// todo.edit(22);
// todo.delete();

// ================================================================================== //

// LOOPS AND INTERATIONS August 20 2019

// ================================================================================== //

// For loop

// for(let i = 0; i < 10; i++) {
//   // console.log('Number ' + i);
//   if(i == 2) {
//     console.log('2 is my favourite number');
//     continue;
//   }
//   if(i === 5) {
//     console.log('Stop the loop');
//     break;
//   }

//   console.log('Number ' + i);
// }

// While loop

// let i = 0;

// while(i < 10) {
//   console.log('Number ' + i)
//   i++;
// }

// DO WHILE

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++
// }

// while(i < 10);

// Loop through array
// const fruits = ['Apple', 'Orange', 'Banana', 'Pears', 'Durian'];
// let count = 0;

// for(let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }


// FOR EACH 
// fruits.forEach(function(fruit, index, array){
//   console.log(`${index} : ${fruit}`);
//   console.log(array);
// })

// MAP

// const colors = [
//   {id: 1, color: "red"},
//   {id: 2, color: "blue"},
//   {id: 3, color: "green"},
//   {id: 4, color: "yellow"}
// ]

// const ids = colors.map(function(element){
//   return element.id;
// })

// const color = colors.map(function(element){
//   return element.color;
// })

// console.log(ids);
// console.log(color);

// FOR IN LOOP

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 40
// }

// for (let x in user) {
//   console.log(x + " : " + user[x]);
// }

// ================================================================================== //

// WINDOW METHODS/ OBJECTS / PROPERTIES August 20 2019

// ================================================================================== //

// Alert

// window.alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm('Are you sure')) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

let val;
const array = ['Apple', 'Blue', 'Cup'];

// OUTER HEIGHT AND WIDTH
val = window.outerHeight;
val = window.outerWidth;

// INNER HEIGHT AND WIDTH
val = window.innerHeight;
val = window.innerWidth;

// SCROLL POINTS
val = window.scrollY;
val = window.scrollX;

// LOCATION OBJECT
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;

// REDIRECT
// window.location.href = 'http://google.ca';

// RELOAD
// window.location.reload();

// HISTORY OBJECT

// window.history.go(-2);

// val = window.history.length;

// NAVIGATOR OBJECT
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);