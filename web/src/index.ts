import { User } from './models/User';


const user = new User({ name: 'five', age: 1 });


user.save();