const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = 78/(1.69**2);
const johnBMI = 92/(1.95*1.95);

console.log(markBMI, johnBMI);
let result;
if (markBMI > johnBMI) {
    result = "Mark's BMI is higher than John's"
} else {
    result = "John's BMI is higher than Mark's"
}
console.log(result);
result = `Mark's BMI ${markBMI} is higher than John's${johnBMI}!`
console.log(result);


const favorite = Number(prompt("What 's your favorite number"));
console.log(favorite);
console.log(typeof favorite );

if (favorite == 23){
    console.log("Cool! 23 is an amazing number")
} else {
    console.log("Nothings!");
}