'use strict';

// Function
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  console.log(arguments);
  return a + b;
}

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

// const addArrow = (a, b) => a + b;

// Arrow functions vs Regular function

// Arguments keyword

addExpr(1, 2, 3, 4, 5);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

// addArrow(1, 2, 3, 4);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

let lastName = 'William';
let oldLastName = lastName;
lastName = 'David';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};

jessica2 = {
    firstName = 'Jessica',
    lastName: 'William',
    age:27
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);