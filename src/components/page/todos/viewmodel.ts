import {useCallback, useEffect} from 'react';
import {Domain, Store, UseCase, ViewModel} from '@feature';
import {useRecoilState} from 'recoil';

export const useTodosViewModel = () => {
  const [todos, setTodos] = useRecoilState(Store.Todo.todos);

  const {
    loading,
    showLoading,
    hideLoading,
  } = ViewModel.Loading.useLoadingViewModel();

  const {error, showError, hideError} = ViewModel.Error.useErrorViewModel();

  const {
    state: {title},
    actions: {setTitle, validate},
  } = ViewModel.TodoForm.useTodoFormViewModel();

  useEffect(() => {
    showLoading();
    UseCase.Todo.todos()
      .then(res => {
        setTodos(res);
      })
      .catch(e => {
        showError(e);
      })
      .finally(hideLoading);
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
    showLoading();
    UseCase.Todo.post(todo)
      .then(() => {
        setTodos([...todos, todo]);
        setTitle('');
      })
      .catch(e => {
        showError(e);
      })
      .finally(hideLoading);
  }, [title, todos]);

  return {
    state: {
      loading,
      error,
      todos,
      title,
    },
    actions: {
      postTodo,
      setTitle,
    },
  };
};
