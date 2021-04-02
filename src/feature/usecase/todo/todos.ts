import {Dispatch} from 'redux';
import {Module, Repository} from '@feature';

export default function todos() {
    return async function (dispatch: Dispatch) {
        dispatch(Module.Error.clearError());
        dispatch(Module.Loading.setLoading(true));
        try {
            const todos = await Repository.Todo.todos();
            dispatch(Module.Todos.setTodos(todos));
        } catch (e) {
            dispatch(Module.Error.setError(e));
        } finally {
            dispatch(Module.Loading.setLoading(false));
        }
    };
}
