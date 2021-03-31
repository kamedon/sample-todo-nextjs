import {Repository} from '@feature';

export const useTodoUseCase = () => {
  const todos = Repository.Todo.todos;
  const postTodo = Repository.Todo.postTodo;
  return {
    todos,
    postTodo,
  };
};
