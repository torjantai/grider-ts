export abstract class Sorter {

    abstract compare(a: number, b: number): boolean;
    abstract swap(a: number, b: number): void;
    abstract length: number;

    sort(): void {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length - 1 - i; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}