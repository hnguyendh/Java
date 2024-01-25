'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
const matilda = new Person('Matilda', 2015);
console.log(matilda);
console.log(jonas instanceof Person);

// Prototype
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);

// .prototypeOfLinkedObject

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('species'));
console.log(jonas.hasOwnProperty('firstName'));

const arr = [3, 4, 5, 33, 45, 2, 123, 3434];
console.log(arr.__proto__);
console.log([...new Set(arr)]);

const h1 = document.querySelector('h1');

// Coding challenge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);
BMW.accelerate();
BMW.brake();
Mercedes.accelerate();
Mercedes.brake();

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(Person.__proto__);

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(amount) {
    this.movements.push(amount);
  }
  withdraw(amount) {
    this.deposit(-amount);
  }
}

const acc1 = new Account('Jonas', ' EUR', 1111);

// acc1.movements.push(250)
// acc1.movements.push(-140)
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
