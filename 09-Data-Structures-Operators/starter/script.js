'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (startedIndex, mainIndex) {
    return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    startedIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  startedIndex: 2,
});

restaurant.orderDelivery({ address: '45 Nguyen Hong', startedIndex: 1 });

const [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [a, b, [c, d]] = nested;
// console.log(a, b, c, d);

// Default values
const [p, q, r = 1] = [8, 9];
console.log(p, q, r);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 67, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arr = [7, 8, 9];
// const newArray = [1, 2, ...arr];
// console.log(newArray);
// console.log(...newArray);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const newMenu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(newMenu2);

// const ingredients = [
//   prompt("Let 's make pasta! ingredients 1?"),
//   prompt('Ingredient2?'),
//   prompt('Ingredient3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Hoang' };
// console.log(newRestaurant);

// SPREAD
const array = [1, 2, ...[3, 4]];

// REST
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

// Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(1, 23, 4, 5, 6, 76, 8);

const numGuest = restaurant.numGuest ? restaurant.numGuest : 10;

const guest1 = restaurant.numGuest || 20;
console.log(guest1);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

const guestsCorrect = restaurant.numGuest ?? 10;
console.log(guestsCorrect);

const rest1 = {
  name: 'Capri',
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Hoang Nguyen',
};

// rest1.numGuests = rest1.numGuest || 10;
// rest2.numGuests = rest2.numGuest || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

rest2.owner = rest2.owner && '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Apple',
]);

console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
console.log(orderSet);
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', ' Waiter'];
const role = new Set(staff);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the date of today?'],
  [1, 'Thursday'],
  [2, 'Wednesday'],
  [3, 'Saturday'],
  ['correct', 1],
  [true, 'Correct!!'],
  [false, 'Try again!'],
]);

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));

// console.log([...question]);

// Coding challenge #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, 'Substitution'],
  [47, '⚽ GOAL'],
  [61, 'Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);

// 1)
const events = new Set(gameEvents.values());
console.log(events);

// 2)
gameEvents.delete(64);
console.log(gameEvents);

// 3)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4)
for (const [time, event] of gameEvents) {
  console.log(
    `[${time <= 45 ? 'FIRST HALF' : 'SECOND HALF'}]${time}: ${event}`
  );
}

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane.indexOf('A'));
console.log(airline.indexOf('P'));
console.log(airline.slice(4));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('rear seat!');
};

checkMiddleSeat('11B');
checkMiddleSeat('27G');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = 'NguyEn';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(passengerCorrect);

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const trimmedLoginEmail = loginEmail.trim();
console.log(trimmedLoginEmail);
const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);

// replacing
const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'go home or go final';
console.log(announcement.replaceAll('go', 'come'));
console.log(announcement.replace(/go/g, 'come'));

// booleans
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('A'));

const checkLuggage = function (items) {
  const luggage = items.toLowerCase();
  if (luggage.includes('knife') || luggage.includes('gun')) {
    console.log('You are not allowed to on plane!');
  } else {
    console.log('Welcome onboard!');
  }
};

console.log('a,very,nice,string'.split(','));

const [firstName, lastName] = 'Hoang Nguyen'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');

// Padding
const message = 'go to gate 23!';
console.log(message.padStart(30, '=').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(12673612873123));
console.log(maskCreditCard('6127367812637812638712'));
