import {Domain} from '@feature';
import {Todo} from '../domain/Todo';

export const todos: () => Promise<Todo[]> = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const data: Todo[] = [{title: 'first', status: 'issue'}];
            return resolve(data);
        }, 1000);
    });
};

export const postTodo = async (todo: Domain.Todo.Todo) => {
    return await new Promise(resolve => {
        setTimeout(() => {
            return resolve(todo);
        }, 1000);
    });
};
