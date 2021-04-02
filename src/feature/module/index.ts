import * as Todos from './todos';
import * as Loading from './loading';
import * as Error from './error';
import {combineReducers} from 'redux';

export {Todos, Loading, Error};

export type AppState = {
  readonly todos: ReturnType<typeof Todos.createInitialState>;
  readonly loading: ReturnType<typeof Loading.createInitialState>;
  readonly error: ReturnType<typeof Error.createInitialState>;
};

export function createInitialState(): AppState {
  return {
    todos: Todos.createInitialState(),
    loading: Loading.createInitialState(),
    error: Error.createInitialState(),
  };
}

export function createAppReducer() {
  return combineReducers<AppState>({
    todos: Todos.reducer,
    loading: Loading.reducer,
    error: Error.reducer,
  });
}
