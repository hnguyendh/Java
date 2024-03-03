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
class Account {
  local = navigator.language;
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  getMovements() {
    return this.#movements;
  }
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan`);
      return this;
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);

//Chaining
acc1.deposit(300).deposit(300).withdraw(100).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed / 1.6;
  }
}

const EV = function (make, speed, charge) {
  CarCl.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(CarCl.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery = function (chargeTo) {
    this.#charge = chargeTo;
    return this;
  };

  accelerate = function () {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
    );
    return this;
  };
  brake = function () {
    this.speed -= 5;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
    );
    return this;
  };
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().chargeBattery(90).brake().accelerate();
console.log(rivian.speedUS);
