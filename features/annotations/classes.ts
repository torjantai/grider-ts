class Vehicle {
  constructor(protected color: string) {}

  protected drive(): void {
    console.log("nananana");
  }

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  startDriving(): void {
    this.drive();
    this.honk();
    console.log(this.color);
  }
}

const car = new Car(4, "yellow");
car.startDriving();
