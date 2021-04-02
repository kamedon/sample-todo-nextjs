import {Dispatch} from 'redux';
import {Domain, Module, Repository} from '@feature';

export default function post(todo: Domain.Todo.Todo) {
  return async function (dispatch: Dispatch) {
    dispatch(Module.Error.clearError());
    dispatch(Module.Loading.setLoading(true));
    try {
      await Repository.Todo.post(todo);
      dispatch(Module.Todos.addTodo(todo));
    } catch (e) {
      dispatch(Module.Error.setError(e));
    } finally {
      dispatch(Module.Loading.setLoading(false));
    }
  };
}
