import { Sorter } from './Sorter'

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const head = this.data.slice(0, leftIndex);
    const swapped = [this.data[rightIndex], this.data[leftIndex]];
    const tail = this.data.slice(rightIndex + 1);
    this.data = [head, ...swapped, tail].join("");
  }
}
