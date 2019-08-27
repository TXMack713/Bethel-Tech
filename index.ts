const somethingFun: string = "Riding my bike is fun!";
console.log(somethingFun);

function orderFood(sandwich: string, orderNumber: number): void {
    console.log('Your order number is ' + orderNumber + ' and contains a ' +
    sandwich + ' sandwich');
}

orderFood('Ham & Cheese', 32);

// const tasty: boolean = true;

//example of the parseInt() function
const age: string = '55';
const ageAsNumber: number = parseInt(age);

const numberCalculation: number = ageAsNumber * 10;

console.log(numberCalculation);

//example of the toString() function
const newAge: number = 32;
const ageAsString: string = newAge.toString();

const greeting: string = 'Hello, my age is ' + ageAsString + '.';

console.log(greeting);