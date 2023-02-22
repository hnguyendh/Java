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