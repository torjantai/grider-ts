const drink = {
    color: 'bronw',
    carbonated: true,
    sugar: 40,
};

type Drink = [string, boolean, number]; // type alias
const pepsi: Drink = ['brown', true, 40];
const fanta: Drink = ['orange', true, 40];
const tea: Drink = ['brown', false, 10];


const carSpecs: [number, number] = [400, 3354];