/*
//VARIABLES AND VALUES

//"js is a variable and 'amazing' is an value"

let js = 'amazing';
//if (js === 'amazing') alert('Javascript is FUN!');

40 + 8 + 23 - 10;
//console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);


let firstName = 'Goat';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myCountry = "USA"
let myContinent = "North America"
let myPopulation = "330 Million"

console.log(myCountry);
console.log(myContinent);
console.log(myPopulation)
*/

//DATA TYPES (Numbers,Boolean,Strings,Null,Undefined,Symbol,BigInt)

//Boolean Example
/*true;
let JavascriptIsFun = true;
console.log(JavascriptIsFun);

// "Type Of" - Operators - Will define what data type in console
console.log(typeof true);
console.log(typeof JavascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

//Assigning new value to existing variable - Do not put let
JavascriptIsFun = 'YES!';
console.log(typeof JavascriptIsFun);

//Undefined Example and reassigning value
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

//Null Example
console.log(typeof null);
*/

/*//Let,Const,Var

// Let - variable that can be mutated (changed)
let age = 30;
age = 31;

//Const - variable that can't be mutated
const birthYear = 1991;
//birthYear = 1994;

// Var 
var job = 'programmer';
job = 'teacher'
*/

/*
// MATH OPERATORS
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// PLUS OPERATOR - used to concatenate strings
const firstName = 'Andre';
const lastName = 'Turner';
console.log(firstName + ' ' + lastName); // + ' ' + Template String which puts a space between name

// ASSIGNMENT OPERATOR (=)
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *=4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// COMPARISON OPERATORS
console.log(ageJonas > ageSarah); // >, <, >==, <==
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/

/*
// OPERATOR PRECENDENCE
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const AverageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, AverageAge);
*/

/*
// TEMPLATE LITERALS
const firstName = 'Andre';
const job = 'Developer';
const birthYear = 1994;
const year = 2022

// TEMPLATE LITERAL EXAMPLE - complicated
const Andre = " I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(Andre);

// TEMPLATE LITERAL EASIER EXAMPLE
const andreNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(andreNew);
*/

/*
// IF ELSE STATEMENTS - ELSE block is optional'
// EXAMPLE IS CALLED A IF ELSE CONTROLLED STRUCTURE
const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 🙃`);
}

const birthYear = 2012;

let century;
if(birthYear <= 2000) {
  let century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// TYPE CONVERSION, TYPE COERCION

/*
//Type conversion
const inputYear = '1994';
console.log(Number(inputYear)); // RETURN STRING AS #
console.log(Number(inputYear) + 18);

console.log(Number('Andre'));
console.log(typeof Nan);

// TYPE COERCION
console.log('I am ' + 23 + ' years old ');
console.log('I am ' + '23' + ' years old');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
*/


// TRUTHY AND FALSEY VALUES
// 5 FALSEY VALUES: 0, '', UNDEFINED, NULL, NAN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Andre'));
console.log(Boolean({}));
console.log(Boolean(''));

// Type coercion in if else condition EX:

// FALSEY EXAMPLE
const money = 0;
if(money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job!');
}

// TRUTHY EXAMPLE
const money1 = 100;
if(money1) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job!');
}

// EQUALITY OPERATORS ===

const age = 18;
if(age === 18) console.log('You just become an adult');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');23
} else if(favourite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}
*/

// BASIC BOOLEAN LOGIC : AND, OR, & NOT OPERATORS
