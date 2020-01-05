// 'https://jsonplaceholder.typicode.com/todos/1'

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: false;
}

axios.get(url).then((res) => {
    const todo = res.data as Todo;
    const { id, title, completed } = todo;
    log(id, title, completed);
});

const log = (id: number, title: string, completed: false) => {
    console.log(id, title, completed);
}
