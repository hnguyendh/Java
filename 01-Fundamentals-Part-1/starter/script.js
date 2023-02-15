// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = 78/(1.69**2);
// const johnBMI = 92/(1.95*1.95);

// console.log(markBMI, johnBMI);
// let result;
// if (markBMI > johnBMI) {
//     result = "Mark's BMI is higher than John's"
// } else {
//     result = "John's BMI is higher than Mark's"
// }
// console.log(result);
// result = `Mark's BMI ${markBMI} is higher than John's${johnBMI}!`
// console.log(result);


// const favorite = Number(prompt("What 's your favorite number"));
// console.log(favorite);
// console.log(typeof favorite );

// if (favorite == 23){
//     console.log("Cool! 23 is an amazing number")
// } else {
//     console.log("Nothings!");
// }
/*
const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
} */
/*
const avgDolphins = (97+112+101)/3;
const avgKoalas = (109+95+106)/3;
const Dolphins = avgDolphins >= 100;
const koalas = avgKoalas >= 100;
const draw = avgDolphins === avgKoalas;
let winner;


if ((avgDolphins > avgKoalas) && Dolphins) {
    winner = 'Dolphins';
    console.log(avgDolphins,avgKoalas,`${winner} is the winner!`);
} else if ((avgKoalas > avgDolphins) && koalas) {
    winner = 'Koalas';
    console.log(avgDolphins,avgKoalas,`${winner} is the winner!`);
} else if (draw && Dolphins && koalas) {
    console.log('draw!')
} */

// const day = 'friday';
// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go shopping!');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// if (day === 'monday'){
//     console.log('Plan course structure');
//     console.log('Go shopping!');
// } else if (day === 'tuesday'){
//     console.log('Prepare theory videos');
// } else if (day ==='wednesday' || day === 'thursday'){
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day!');
// }

const age = 23;
age >= 18 ? console.log('I would like to drink wine'):
console.log('I would like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

const ageStatus = age >= 18 ? 'adult' : 'adolescence';
console.log(ageStatus);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);