import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([10, 3, -5, 0]);
numbers.sort();
console.log(numbers);

const string = new CharactersCollection('XabdfgJA')
string.sort();
console.log({string});

const linkedListValues = [3, 1, 0];
const linkedList = new LinkedList();
linkedListValues.forEach((value) => linkedList.add(value))
linkedList.sort();
linkedList.print();
