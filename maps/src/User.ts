import faker from "faker";
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.address = faker.address.streetAddress();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude())
    };
  }

  getMarkerContent = (): string => {
    return `
      <h3>${this.name}</h3>
      <p>${this.address}</p>
    `
  };
}
