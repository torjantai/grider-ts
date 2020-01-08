import { User } from './models/User';

const user = new User({ id: 1, name: 'mirjaana' });

const n = user.get('name');
console.log(n);

user.on('save', () => {
    console.log(user);
})
user.on('error', () => {
    console.log('errr');
})

user.save();
