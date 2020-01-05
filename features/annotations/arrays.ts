const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro'],
]

// help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// prevent inconpatible values
carMakers.push(100);

// help with map
carMakers.map((car: string): string => car)

// flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2020-02-21');