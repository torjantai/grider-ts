const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 24,
    lng: 60
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age, name } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
