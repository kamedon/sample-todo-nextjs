import {Repository} from '@feature';

export const useTodosUseCase = () => {
  const todos = Repository.Todo.todos;
  const postTodo = Repository.Todo.postTodo;
  return {
    todos,
    postTodo,
  };
};
