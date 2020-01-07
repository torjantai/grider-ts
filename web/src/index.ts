import { User } from './models/User';

const user = new User({ name: 'five', age: 1 });

const n = user.get('name');
console.log(n);

user.on('change', () => {
    console.log('change');
})

user.trigger('change');
