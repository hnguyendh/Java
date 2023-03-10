/*'use strict';

function logger(){
    console.log('my name is Hoang');
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
};

fruitProcessor(5,0);
const applesJuice = fruitProcessor(5,0);
console.log(applesJuice);
*/
/*
function calcAge1(birthYear){
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1997);
console.log(age1);

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1997);
console.log(age1, age2);

// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear,name) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${name} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1997,'Hoang'));

// Code challenges #1

const calcAverage = (a,b,c) => (a + b + c)/3;
const avgDolphins = calcAverage(85,54,41);
const avgKoalas = calcAverage(23,34,27);

function checkWinner(avgDolphins,avgKoalas){
    if (avgDolphins > avgKoalas*2){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins*2){
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
    }
}

checkWinner(avgDolphins,avgKoalas)*/
/*
// Array

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael','Steven','Peter'];
console.log(friends);

const years = new Array(1997,1998,1999,2000);

console.log(friends[0]);
console.log(friends.length)

const hoang = ['Hoang','Nguyen', 2023-1997];
console.log(hoang);

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[2]);
const age4 = calcAge2(years[years.length -1]);
console.log(age1, age2, age3, age4);

const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);
console.log(friends.indexOf('Michael'));

console.log(friends.includes('John'));


// function calcTip(bill) {
//     let tip;
//     if (bill >= 50 & bill <= 300){
//         tip = bill*0.15;
//     } else {
//         tip = bill *0.2;
//     };
//     return tip;
// };

const calcTip = function(bill){
    return bill >= 50 && bill <= 300? bill * 0.15 : bill * 0.2;
}

bills = new Array(125, 555, 44);
tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];

console.log(bills);
console.log(tips);
console.log(total);

const hoangArray = [
    'hoang',
    'nguyen',
    2023-1997,
    'DE'
];

const hoangCV = {
    firstName: 'Hoang',
    lastName: 'Nguyen',
    birthYear: 1997,
    job: 'DE',
    friend:['Michael','Steven','Peter'],
    calcAge: function() {
        this.age =  2037 - this.birthYear;
        return this.age;
    },
    driverLicense: true
}

console.log(hoangCV);
console.log(hoangCV.age);

const nameKey = 'Name';
console.log(hoangCV['first'+nameKey]);
console.log(hoangCV['last'+nameKey]);

// const interestedIn = prompt('What do you want to know about me?');
// console.log(hoangCV[interestedIn]);

// if (hoangCV[interestedIn]){
//     console.log(hoangCV[interestedIn]);
// } else {
//     console.log('Wrong request! Choose again')
// }

console.log(`${hoangCV.firstName} has ${(hoangCV.friend).length} friends, and his best friend is called ${(hoangCV.friend)[0]}`);

console.log(hoangCV.calcAge());
console.log(hoangCV.age);

console.log(`${hoangCV.firstName} is a ${hoangCV.age}-year old ${hoangCV.job}, and he has ${hoangCV.driverLicense? 'a':'no'} driver license `);

// Coding challenges #3

const mark = {
    fullName:'Mark Miller',
    mass : 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass/this.height**2;
        return this.BMI;
    }
};

const john = {
    fullName:'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass/this.height**2;
        return this.BMI;
    }
};

mark.calcBMI();
john.calcBMI();
if (john.BMI > mark.BMI){
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})! `);
} else if (john.BMI < mark.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})! `);
};

for (let rep =1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < jonasArray.length; i++){
    console.log(jonasArray[i], typeof jonasArray[i]);

    types[i] = typeof jonasArray[i];
};

console.log(types)

for (let i = 0; i < jonasArray.length; i++){
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

for (let i = 0; i < jonasArray.length; i++){
    if (typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

for (let i = jonasArray.length - 1; i >= 0; i --){
    console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`----------Starting Exercise ${exercise}`);

    for ( let rep = 1; rep < 6; rep++){
        console.log(`Lifting weight repetitions ${rep}`);
    }
}

*/
let rep = 1;
while (rep <= 10){
    console.log(`Lifting weight repetitions ${rep}`);
    rep ++;
}

let dice = Math.trunc(Math.random() * 6);
while (dice != 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6) +1;
    if (dice === 6) console.log('Loop is about to end...');
}

const bills = [22 , 295 , 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function taxRate(bill){
    if (bill >= 50 & bill <= 300){
        tipRate = 0.15;
    } else {tipRate = 0.2};
    return tipRate;
}
for (i = 0; i < bills.length; i ++){
    let tip ;
    tip = (taxRate(bills[i])*bills[i]);
    tips.push(tip);
    totals.push(tip+bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function(arr){
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));