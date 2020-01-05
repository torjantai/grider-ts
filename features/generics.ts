class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']);

// generics with functions

function printAnything<T>(arr: T[]): void {
    arr.forEach((item) => console.log(item));
}

printAnything<string>(['a', 'b', 'c']); // recommended to explicitly annotate type so that ts can spot more errors
printAnything(['a', 'b', 'c']); // using type inference
  
// Generic constraints

class Car {
    print(): void {
        console.log('I am a car');
    }
}
class House {
    print(): void {
        console.log('I am a house');
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (const item of arr) {
        item.print();
    }
}

printHousesOrCars<House>([new House, new House]);
printHousesOrCars([new House, new Car]);

