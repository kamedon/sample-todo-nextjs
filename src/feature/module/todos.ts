import {Todo} from '../domain/Todo';

export function createInitialState(): Todo[] {
  return [];
}

export const GET_TODOS = 'todos/get' as const;
export const SET_TODOS = 'todos/set' as const;
export const ADD_TODO = 'todos/add' as const;

export function getTodos() {
  return {
    type: GET_TODOS,
  };
}

export function setTodos(todos: Todo[]) {
  return {
    type: SET_TODOS,
    payload: {
      todos,
    },
  };
}

export function addTodo(todo: Todo) {
  return {
    type: ADD_TODO,
    payload: {
      todo,
    },
  };
}

export type Actions = ReturnType<
  typeof getTodos | typeof setTodos | typeof addTodo
>;

export function reducer(state = createInitialState(), action: Actions) {
  switch (action.type) {
    case GET_TODOS:
      return state;
    case SET_TODOS:
      return action.payload.todos;
    case ADD_TODO:
      return [...state, action.payload.todo];
    default:
      return state;
  }
}
