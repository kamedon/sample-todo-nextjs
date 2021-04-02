import {useCallback, useEffect} from 'react';
import {Domain, Module, UseCase, ViewModel} from '@feature';
import {useDispatch, useSelector} from 'react-redux';

export const useTodosViewModel = () => {
  const {todos, error, loading} = useSelector(
    (state: Module.AppState) => state
  );
  const dispatch = useDispatch();
  const {
    error: formError,
    showError,
    hideError,
  } = ViewModel.Error.useErrorViewModel();

  const {
    state: {title},
    actions: {setTitle, validate},
  } = ViewModel.TodoForm.useTodoFormViewModel();

  useEffect(() => {
    dispatch(UseCase.Todo.todos());
  }, []);

  const postTodo = useCallback(() => {
    const {valid, message} = validate();
    if (!valid) {
      showError(new Error(message));
      return;
    }
    hideError();
    const todo: Domain.Todo.Todo = {
      title,
      status: 'issue',
    };
    dispatch(UseCase.Todo.post(todo));
    setTitle('');
  }, [title, todos]);

  return {
    state: {
      loading,
      error: formError ?? error,
      todos,
      title,
    },
    actions: {
      postTodo,
      setTitle,
    },
  };
};
