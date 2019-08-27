"use strict";
const somethingFun = "Riding my bike is fun!";
console.log(somethingFun);
function orderFood(sandwich, orderNumber) {
    console.log('Your order number is ' + orderNumber + ' and contains a ' +
        sandwich + ' sandwich');
}
orderFood('Ham & Cheese', 32);
// const tasty: boolean = true;
//example of the parseInt() function
const age = '55';
const ageAsNumber = parseInt(age);
const numberCalculation = ageAsNumber * 10;
console.log(numberCalculation);
//example of the toString() function
const newAge = 32;
const ageAsString = newAge.toString();
const greeting = 'Hello, my age is ' + ageAsString + '.';
console.log(greeting);
