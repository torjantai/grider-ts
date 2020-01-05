import { User } from './models/User';
import { Sync } from './models/Sync';

// const sync = new Sync(DB_URL);
const user = new User({ name: 'five', age: 1 });
console.log(user)
// sync.fetch(1).then((data) => console.log(data));

// user.save();