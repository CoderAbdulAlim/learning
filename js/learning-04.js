//JavaScript For In Loop

for (key in object) {
  // code block to be executed
}

const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

//For In Over Arrays
for (variable in array) {
  code
}

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

//Array.forEach()
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value;
}

//The For Of Loop
for (variable of iterable) {
  // code block to be executed
}

//Looping over an Array
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

//Looping over a String
let language = "JavaScript";

let text = "";
for (let x of language) {
text += x;
}



x = Math.random() * 100;
y = Math.floor(Math.random() * 100);
console.log(x, y);