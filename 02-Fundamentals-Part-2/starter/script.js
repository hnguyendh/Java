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