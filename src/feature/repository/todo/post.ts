import {Domain} from '@feature';

function postTodo(todo: Domain.Todo.Todo) {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(todo);
        }, 1000);
    });
};

export default postTodo
